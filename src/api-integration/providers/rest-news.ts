import axios from "axios";

const NEWS_API_URL = "https://newsapi.org/v2/everything";
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async (topic: string): Promise<string> => {
  const url = `${NEWS_API_URL}?q=${encodeURIComponent(
    topic
  )}&language=es&pageSize=3&sortBy=publishedAt`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${NEWS_API_KEY}`,
      },
    });

    const articles = response.data.articles;

    if (!articles || articles.length === 0) {
      return `No news found for "${topic}".`;
    }

    const headlines = articles
      .map((a: any, i: number) => `${i + 1}. ${a.title}`)
      .join("\n");

    return `Latest headlines on "${topic}":\n\n${headlines}`;
  } catch (error) {
    return `Could not get news about "${topic}".`;
  }
};
