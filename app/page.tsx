"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="pt-4 pb-32">
      {messages.map((m) => (
        <div key={m.id} className="border-t border-black/10 ">
          <div className="max-w-3x1 mx-auto py-6 flex">
            <span className="ml-3">
              {m.role}: {m.content}
            </span>
          </div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="fixed inset-x-0 bottom-10">
        <label>
          <input
            className="max-w-3x1 shadow-xl w-full mx-auto py-8 flex h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter a prompt"
          />
        </label>
      </form>
    </div>
  );
}
