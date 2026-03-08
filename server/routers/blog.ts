import { publicProcedure, router } from "../_core/trpc";
import axios from "axios";

interface SubstackPost {
  title: string;
  url: string;
  date: string;
  excerpt: string;
  thumbnail: string | null;
}

async function fetchSubstackPosts(): Promise<SubstackPost[]> {
  const rssUrl = "https://danielcarvalhodcs.substack.com/feed";
  
  const response = await axios.get(rssUrl, {
    timeout: 10000,
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; DCSMidia/1.0)",
      "Accept": "application/rss+xml, application/xml, text/xml"
    }
  });

  const xml = response.data as string;
  const posts: SubstackPost[] = [];

  // Parse items from RSS XML
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];

    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || item.match(/<title>(.*?)<\/title>/);
    const linkMatch = item.match(/<link>(.*?)<\/link>/);
    const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
    const descMatch = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || item.match(/<description>([\s\S]*?)<\/description>/);
    const enclosureMatch = item.match(/<enclosure[^>]+url="([^"]+)"/);
    const mediaMatch = item.match(/<media:content[^>]+url="([^"]+)"/);

    if (!titleMatch || !linkMatch) continue;

    const title = titleMatch[1].trim();
    const url = linkMatch[1].trim();
    
    let date = "";
    if (pubDateMatch) {
      const d = new Date(pubDateMatch[1]);
      date = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
    }

    let excerpt = "";
    if (descMatch) {
      // Strip HTML tags and get plain text
      excerpt = descMatch[1]
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 200);
      if (excerpt.length === 200) excerpt += "...";
    }

    const thumbnail = enclosureMatch?.[1] || mediaMatch?.[1] || null;

    posts.push({ title, url, date, excerpt, thumbnail });
  }

  return posts;
}

export const blogRouter = router({
  getPosts: publicProcedure.query(async () => {
    try {
      const posts = await fetchSubstackPosts();
      return { posts };
    } catch (error) {
      console.error("[Blog] Failed to fetch Substack posts:", error);
      return { posts: [] };
    }
  }),
});
