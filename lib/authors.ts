import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Author } from "@/types/Author";
import { slugify } from "@/lib/slugify";
import { marked } from "marked";

const authorsDirectory = path.join(process.cwd(), "data/authors");

function parseAuthorData(fileContents: string): Author {
  const { data, content } = matter(fileContents);
  return {
    id: data.id as string,
    fullname: data.fullname as string,
    jobTitle: data.jobTitle as string,
    bio: data.bio as string,
    email: data.email as string,
    avatar: data.avatar as string,
    location: data.location as {
      city: string;
      state: string;
      country: string;
      zipCode: string;
    },
    slug: slugify(data.fullname as string),
    contentHTML: content ? marked(content) : undefined,
  } as Author;
}

export function getAuthors(): Author[] {
  const fileNames = fs.readdirSync(authorsDirectory);

  return fileNames.map((fileName) => {
    const filePath = path.join(authorsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return parseAuthorData(fileContents);
  });
}

export function getAuthorBySlug(slug: string): Author | null {
  const fileNames = fs.readdirSync(authorsDirectory);

  for (const fileName of fileNames) {
    const filePath = path.join(authorsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const author = parseAuthorData(fileContents);

    if (author.slug === slug) {
      return author;
    }
  }

  return null;
}