import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import footnotes from "remark-footnotes";
import { Post } from "@app/posts/post-layout";

import "server-only";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getSortedPostsData() {
  // Get file names under /posts
  const files = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    files.map(async (file) => {
      // Remove ".md" from file name to get id
      const id = file.replace(/\.md$/, "");
      return await getPostData(id);
    })
  );

  // Sort posts by date
  return posts.sort((left, right) => {
    if (left.date < right.date) {
      return 1;
    } else if (left.date > right.date) {
      return -1;
    }

    return 0;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const allowDangerousHtml = {
    allowDangerousHtml: true,
  };

  const contentHtml = await unified()
    .use(remarkParse)
    .use(footnotes)
    .use(remarkRehype, allowDangerousHtml)
    .use(rehypeStringify, allowDangerousHtml)
    .use(rehypeHighlight)
    .process(matterResult.content)
    .then((content) => content.toString());

  // Combine the data with the id
  const { title, date, description, image } = matterResult.data;

  const post: Post = {
    id,
    contentHtml,
    title,
    date,
    description,
    image,
  };

  return post;
}
