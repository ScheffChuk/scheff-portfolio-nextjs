import { ChatOpenAI } from "@langchain/openai";
import { LangChainAdapter } from "ai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;
    const currentMessageContent = messages[messages.length - 1].content;

    const chatModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      temperature: 0.5,
      streaming: true,
    });

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a sarcasm bot. Your answer all user questions in a sarcastic way.",
      ],
      ["user", "{input}"],
    ]);

    const formattedMessages = await prompt.formatMessages({
      input: currentMessageContent,
    });

    const stream = await chatModel.stream(formattedMessages);

    return LangChainAdapter.toDataStreamResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
