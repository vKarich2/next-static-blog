import { Post } from "@/types/Post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import formatDate from "@/lib/formatDate";

interface SinglePostProps {
	post: Post;
}

const SinglePost: React.FC<SinglePostProps> = ({ post }: SinglePostProps) => {
	return (
		<div className="relative">
			<Image src={post.image} alt={post.title} title={post.title} layout="fill" objectFit="cover" className="w-full h-full object-cover" />
			<div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded">
				<h2 className="text-xl font-bold">{post.title}</h2>
				<h6 className="text-sm text-gray-600">{post.category}</h6>
				<p className="mt-2">{post.description}</p>
				<p className="mt-2 text-sm">Posted on {formatDate(post.date)}</p>
				<p className="mt-2 text-sm">By <Link href={`/authors/${post.author.slug}`} className="text-blue-500">{post.author.fullname}</Link></p>
			</div>
		</div>
	);
}

export default SinglePost;