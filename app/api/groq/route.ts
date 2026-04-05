import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const apiKey = process.env.AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API key is missing in Vercel" }, { status: 500 });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) throw new Error("Failed to fetch from Groq API");

    const data = await response.json();
    return NextResponse.json({ result: data.choices[0].message.content });

  } catch (error) {
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
