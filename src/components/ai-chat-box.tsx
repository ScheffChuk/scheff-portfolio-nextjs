import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import { SendHorizonal, Trash, XCircle } from "lucide-react";
import Image from "next/image";
import profileImage from "@/assets/do-nothing-club-dog.jpg";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useEffect, useRef } from "react";

type AIChatBoxProps = {
  open: boolean;
  onClose: () => void;
};

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div
      className={cn(
        "bottom-3 right-0 z-50 w-full max-w-[450px] p-1 xl:right-36",
        open ? "fixed" : "hidden"
      )}
    >
      <div className="flex flex-col h-[500px] rounded-xl bg-white shadow-xl dark:bg-gray-800">
        <button onClick={onClose} className="m-2 ms-auto block">
          <XCircle size={24} />
        </button>
        <div className="mt-3 h-full overflow-auto px-3" ref={scrollRef}>
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
          {isLoading && lastMessageIsUser && (
            <ChatMessage
              message={{
                id: "loading",
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                id: "error",
                role: "assistant",
                content: "Something went wrong. Please try again.",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="flex flex-col h-full items-center justify-center gap-3 text-center mx-8">
              <Image
                src={profileImage}
                alt="Scheff portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-10 w-10 rounded-full mr-1 object-cover border-[0.25rem] bg-white border-white shadow-xl dark:bg-gray-900"
              />
              <p className="text-lg font-medium">
                Send a message to start the chat
              </p>
              <p>
                You can ask the box any question about me and it will find the
                relevant information on this website.
              </p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-2">
          <button
            type="button"
            className="flex items-center justify-center w-10 flex-none"
            title="Clear chat"
            onClick={() => setMessages([])}
          >
            <Trash size={24} />
          </button>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Say something..."
            className="grow border rounded bg-background px-3 py-2"
            ref={inputRef}
          />
          <button
            className="flex items-center justify-center w-10 flex-none disabled:opacity-50"
            disabled={isLoading || input.length === 0}
            type="submit"
            title="Submit your message"
          >
            <SendHorizonal size={24} color="#3399ff" />
          </button>
        </form>
      </div>
    </div>
  );
}

type ChatMessageProps = {
  message: Message;
};

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mx-2 my-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end"
      )}
    >
      {isAiMessage && (
        <Image
          src={profileImage}
          alt="Scheff portrait"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="h-10 w-10 rounded-full mr-1 object-cover border-[0.25rem] bg-white border-white shadow-xl dark:bg-gray-900"
        />
      )}
      <div
        className={cn(
          "rounded-md border px-3 py-2 text-gray-700",
          isAiMessage
            ? "bg-background dark:bg-white"
            : "bg-gray-800 text-white dark:text-white"
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-primary hover:underline"
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
