import { ChatOpenAI } from "@langchain/openai";
import { LangChainAdapter, Message as VercelMessage } from "ai";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  PromptTemplate,
} from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { getVectorStore } from "@/lib/astradb";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { UpstashRedisCache } from "@langchain/community/caches/upstash_redis";
import { Redis } from "@upstash/redis";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const chatHistory = messages
      .slice(0, -1)
      .map((m: VercelMessage) =>
        m.role === "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      );

    const currentMessageContent = messages[messages.length - 1].content;

    const cache = new UpstashRedisCache({
      client: Redis.fromEnv(),
      ttl: 3600,
    });

    const chatModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      temperature: 0.5,
      streaming: true,
      verbose: true,
      cache,
    });

    const rephrasingModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      verbose: true,
      cache,
    });

    console.log(cache);

    const retriever = (await getVectorStore()).asRetriever({
      verbose: true,
    });

    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Given the above conversation, generate a search query to look up in order to get information relevant to the current question." +
          "Dont't leave out any relevant keywords. Only return the query and no other text.",
      ],
    ]);

    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
      llm: rephrasingModel,
      retriever,
      rephrasePrompt,
    });

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        `You are an AI assistant for Scheff Chu's personal portfolio website. Your role is to:

    1. Represent Scheff's professional identity and expertise by:
       - Speaking in a professional yet personable tone
       - Drawing from the provided context to accurately represent his background, skills, and experiences
       - Maintaining consistency with his public persona
    
    2. Help visitors navigate the portfolio by:
       - Suggesting related content based on visitor interests
       - Using markdown formatting for clear content organization
    
    3. Handle interactions appropriately by:
       - Clearly indicating when information is not available in the provided context
       - Redirecting inappropriate queries professionally
       - Maintaining conversation context within each session
    
    Context:
    {context}

    Remember to:
    - Be helpful and engaging while staying true to Scheff's voice
    - Use markdown for structured, readable responses
    - Stay within the bounds of provided context`,
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate("{page_content}"),
      documentSeparator: "\n--------\n",
    });

    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrieverChain,
    });

    const stream = await retrievalChain.stream({
      input: currentMessageContent,
      chat_history: chatHistory,
      cache,
    });

    // Transform the stream to match the expected format
    const transformedStream = new TransformStream({
      transform(chunk, controller) {
        // Map the answer to content property
        controller.enqueue({
          type: "text",
          content: chunk.answer || "",
        });
      },
    });

    // Pipe through the transformer before passing to the adapter
    const transformedResponseStream = stream.pipeThrough(transformedStream);

    return LangChainAdapter.toDataStreamResponse(transformedResponseStream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
