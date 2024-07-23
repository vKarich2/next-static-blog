import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/Post";
import { Author } from "@/types/Author";
import { slugify } from "@/lib/slugify";
import { marked } from "marked";
import readingTime from "@/lib/readingTime";

const postsDirectory = path.join(process.cwd(), "data/posts");

function parsePost(fileContents: string): Post {
  const { data, content } = matter(fileContents);
  return {
    id: data.id as string,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    image: data.image as string,
    category: data.category as string,
    author: data.author as Author,
    slug: slugify(data.title as string),
    contentHTML: content ? marked.parse(content) : undefined,
    readingTime: readingTime(content).text,
  } as Post;
}

export function getPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return parsePost(fileContents);
  });

  posts.sort((a, b) => a.date < b.date ? 1 : -1);

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const fileNames = fs.readdirSync(postsDirectory);

  for (const fileName of fileNames) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const post = parsePost(fileContents);
    if (post.slug === slug) {
      return post;
    }
  }

  return null;
}