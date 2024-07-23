import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Author } from "@/types/Author";
import { slugify } from "@/lib/slugify";
import { marked } from "marked";

const authorsDirectory = path.join(process.cwd(), "data/authors");

export function getAuthors(): Author[] {
  const fileNames = fs.readdirSync(authorsDirectory);

  const authors = fileNames.map((fileName) => {
    const filePath = path.join(authorsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);
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
    } as Author;
  });

  return authors;
}

export function getAuthorBySlug(slug: string): Author | null {
  const fileNames = fs.readdirSync(authorsDirectory);

  for (const fileName of fileNames) {
    const filePath = path.join(authorsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    if (slugify(data.fullname as string) === slug) {
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
        contentHTML: marked(content),
      } as Author;
    }
  }

  return null;
}
