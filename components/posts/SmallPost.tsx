import { Post } from "@/types/Post";
import formatDate from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

interface SmallPostProps {
	post: Post;
}

const SmallPost: React.FC<SmallPostProps> = ({ post }: SmallPostProps) => {
	return (
		<div className="flex flex-col">
			<div className="relative w-[390px] h-[235px]">
				<Image src={post.image} alt={post.title} title={post.title} layout="fill" objectFit="cover" />
			</div>
			<div className="flex flex-col max-w-[390px]">
				<div className="flex justify-between mt-6 mb-3">
					<h6>{post.category}</h6>
					<h6>{formatDate(post.date)}</h6>
				</div>
				<Link className="text-[20px] leading-normal font-semibold min-h-[45px] max-w-[390px]" href={`/blog/${post.slug}`}>{post.title}</Link>
				<p className="leading-[20px] mt-3 min-h-[68px]">{post.description}</p>
			</div>
		</div>
	);
};

export default SmallPost;