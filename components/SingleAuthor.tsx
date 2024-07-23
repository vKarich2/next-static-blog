import { Author } from "@/types/Author";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SingleAuthorProps {
	author: Author;
	isSingleAuthorPage?: boolean;
}

const SingleAuthor: React.FC<SingleAuthorProps> = ({ author, isSingleAuthorPage = true}: SingleAuthorProps) => {
	
	return (
		<div>
			{isSingleAuthorPage ? (
				<div className="flex flex-col items-center">
					<Image className="rounded-full" src={author.avatar} alt={author.fullname} title={author.fullname} width={250} height={250} />
					<div className="flex flex-col items-center mt-12 gap-3">
						<h2>{author.fullname}</h2>
						<h6>{author.jobTitle}</h6>
						<p className="max-w-[320px] text-center m-0">{author.bio}</p>
					</div>
				</div>
				) : (
					<div className= "flex flex-col items-center text-center max-w-[185px] gap-8" key = {author.slug}>
						<Image className="rounded-full" src={author.avatar} alt={author.fullname} title={author.fullname} width={185} height={185} />
						<div className="flex flex-col justify-center items-center gap-2">
							<Link className="text-2xl font-semibold max-w-[120px]" href={`/authors/${author.slug}`}>{author.fullname}</Link>
							<h6>{author.jobTitle}</h6>
							<p className="text-[#444444]">{author.bio}</p>
						</div>
				</div>
				)}
			</div>	
	);
}

export default SingleAuthor;