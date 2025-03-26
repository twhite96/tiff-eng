import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@/utils/getSortedPosts";
import { SITE } from "@/config";
import { globalImageUrls } from "@/utils/globalImageUrls";
import sanitizeHtml from "sanitize-html";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data, id, rendered }) => ({
      content: globalImageUrls(
        SITE.website,
        sanitizeHtml(rendered?.html, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        }),
      ),
      link: `posts/${id}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
