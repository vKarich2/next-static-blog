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
		<div className="w-full mb-10">
			<div className="relative w-[1320px] h-[775px]">
				<Image className="z-10" src={post.image} alt={post.title} title={post.title} layout="fill" objectFit="cover" />
				<div className="absolute flex flex-col justify-center w-screen h-[398px] bottom-0 right-2/4 translate-x-2/4 bg-[#444444] bg-opacity-70 dark:bg-white dark:bg-opacity-70 backdrop-blur-sm z-50">
					<div className="mx-auto px-[60px] w-[1320px]">
						<div className="flex justify-between items-center">
							<h6 className="text-[#c6c6c6] dark:text-[#444444]">{post.category}</h6>
							<div className="flex items-center gap-x-3">
								<h6 className="text-[#c6c6c6] dark:text-[#444444]">{formatDate(post.date)}</h6>
								<div className="w-[3px] h-[3px] bg-[#c6c6c6] dark:bg-[#444444] rounded-full"></div>
								<h6 className="text-[#c6c6c6] dark:text-[#444444]">{(post as any).readingTime}</h6>
							</div>
						</div>
						<h1 className="text-white dark:text-black text-4xl font-bold mt-[45px]">{post.title}</h1>
						<h3 className="text-[#c6c6c6] dark:text-[#444444] text-lg font-light mt-[35px]">{post.description}</h3>
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default SinglePost;