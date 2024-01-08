// /api/chat

import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log("vapiKey", config.apiKey);
const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const body = await req.json();
  const { messages } = body;

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
