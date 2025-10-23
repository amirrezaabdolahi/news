import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "Missing query parameter" },
      { status: 400 }
    );
  }

  const API_KEY = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    query
  )}&language=en&pageSize=10&apiKey=${API_KEY}`;

  try {
    const res = await fetch(url, { next: { revalidate: 0 } }); // disables caching
    const data = await res.json();

    // Handle NewsAPI errors (like invalid key or rate limits)
    if (data.status !== "ok") {
      return NextResponse.json(
        { error: data.message || "Failed to fetch news" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
