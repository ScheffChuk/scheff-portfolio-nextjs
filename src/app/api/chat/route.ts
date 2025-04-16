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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const chatHistory = messages
      .slice(0, -1)
      .map((m: VercelMessage) =>
        m.role === "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content),
      );

    const currentMessageContent = messages[messages.length - 1].content;

    const chatModel = new ChatOpenAI({
      modelName: "gpt-4.1-mini-2025-04-14",
      temperature: 0.5,
      streaming: true,
      verbose: true,
    });

    const rephrasingModel = new ChatOpenAI({
      modelName: "gpt-4.1-mini-2025-04-14",
      verbose: true,
    });

    const retriever = (await getVectorStore()).asRetriever({
      verbose: true,
    });

    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Based on this conversation, generate a focused search query for the current question. Include all relevant keywords. Return only the query.",
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
        `You are Scheff Chuk's AI assistant for his portfolio site.
    
    - Speak professionally and personably, reflecting Scheff's expertise and background using the provided context.
    - Suggest related content and use markdown for clarity.
    - If info is missing, say so. Handle inappropriate queries politely.
    - Stay within the given context and maintain session continuity.
    
    Context:
    {context}`,
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
