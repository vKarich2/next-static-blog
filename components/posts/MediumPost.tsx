import { Post } from "@/types/Post";
import formatDate from "@/lib/formatDate";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface MediumPostProps {
	post: Post;
}

const MediumPost: React.FC<MediumPostProps> = ({ post }: MediumPostProps) => {
	return (
		<div className="relative w-[870px] h-[510px]">
			<Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
			<div className="flex flex-col justify-center absolute bottom-[45px] right-[45px] bg-white dark:bg-[#1e1e1e] w-[480px] h-[290px] px-10">
				<div className="flex justify-between">
					<h6>{post.category}</h6>
					<h6>{formatDate(post.date)}</h6>
				</div>
				<Link className="text-[20px] leading-normal font-semibold min-h-[45px] max-w-[390px]" href={`/blog/${post.slug}`}>{post.title}</Link>
				<p className="leading-[20px] mt-3 min-h-[68px] max-w-[390px]">{post.description}</p>
			</div>
		</div>
	);
};

export default MediumPost;