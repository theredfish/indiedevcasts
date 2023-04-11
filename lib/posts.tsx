import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import footnotes from "remark-footnotes";
import { Post } from "../app/posts/post-layout";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const { title, date, description, image } = matterResult.data;
    const post: Post = {
      id,
      contentHtml: fileContents,
      title,
      date,
      description,
      image,
    };

    return post;
  });

  // Sort posts by date
  return allPostsData.sort((currPost, nextPost) => {
    if (currPost.date < nextPost.date) {
      return 1;
    } else if (currPost.date > nextPost.date) {
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

export async function getPostData(id) {
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
