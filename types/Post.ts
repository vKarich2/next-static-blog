import { Author } from "./Author";

export interface Post {
	id: string;
	title: string;
	description: string;
	date: string;
	image: string;
	category: string;
	author: Author;
	slug: string;
}