import { getAllPostIds, getPostData } from "../../../lib/posts";
import PostLayout, { Post } from "../post-layout";
import type { Metadata } from "next";

async function getPost(params) {
  return await getPostData(params.id);
}

export async function generateStaticParams() {
  return getAllPostIds();
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const post: Post = await getPost(params);
  const imageUrl = `/images/blog/${post.id}/${post.image}`;

  return {
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: imageUrl, alt: post.description }],
    },
    twitter: {
      site: "@indiedevcasts",
      title: post.title,
      images: [{ url: imageUrl, alt: post.description }],
      description: post.description,
      card: "summary_large_image",
    },
  };
}

export default async function Post({ params }) {
  const post: Post = await getPost(params);

  return <PostLayout post={post} />;
}
