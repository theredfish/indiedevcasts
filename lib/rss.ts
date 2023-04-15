import { Feed } from "feed";
import { Post } from "app/posts/post-layout";
import "server-only";

export function getPostsAtomFeed(posts: Post[]) {
  const siteUrl = new URL(
    `${
      process.env.NEXT_PUBLIC_BASE_URL ||
      `http://localhost:${process.env.PORT || 3000}`
    }`
  );

  const feed = new Feed({
    title: "Indiedevcasts",
    description: "Indiedevcasts written material feed",
    id: siteUrl.toString(),
    link: siteUrl.toString(),
    image: `${siteUrl}metadata_logo.png`,
    favicon: `${siteUrl}favicon-32x32.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Indiedevcasts, Julian Didier`,
    feedLinks: {
      atom: `${siteUrl}atom.xml`,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}posts/${post.id}`,
      link: `${siteUrl}posts/${post.id}`,
      description: post.description,
      date: new Date(post.date),
      image: `${siteUrl}${post.image}`,
      content: post.contentHtml,
    });
  });

  return feed.atom1();
}
