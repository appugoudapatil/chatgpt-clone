"use client";

import GPTLogo from "@components/GPTLogo";
import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="pt-4 pb-32  bg-white ml-20 mr-20 pl-9 pr-9">
      {messages.map((m) => (
        <div
          key={m.id}
          className={`border-t border-black/10 ${
            m.role === "assistant" && "bg-gray-100"
          }`}
        >
          <div className="max-w-3x1 mx-auto py-6 flex">
            {m.role === "assistant" && <GPTLogo />}
            <span className="ml-3  text-black">{m.content}</span>
          </div>
        </div>
      ))}

      <form
        onSubmit={handleSubmit}
        className="pt-4 fixed inset-x-0 bottom-10 ml-20 mr-20 pl-9 pr-9"
      >
        <label>
          <input
            className="max-w-3x1 shadow-xl w-full mx-auto py-8 flex h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background text-black"
            value={input}
            onChange={handleInputChange}
            placeholder="Message CloudGPT..."
          />
        </label>
      </form>
    </div>
  );
}
