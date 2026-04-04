import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const apiKey = process.env.AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is missing from environment variables." },
        { status: 500 }
      );
    }

    // Example using OpenAI's API structure. 
    // Change the URL and body if using Gemini, Claude, etc.
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // or your preferred model
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from AI provider");
    }

    const data = await response.json();
    const resultText = data.choices[0].message.content;

    return NextResponse.json({ result: resultText });

  } catch (error) {
    console.error("AI API Error:", error);
    return NextResponse.json(
      { error: "An error occurred while generating the response." },
      { status: 500 }
    );
  }
}
