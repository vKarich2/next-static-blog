"use client";

import { Post } from "@/types/Post";
import SmallPost from "@/components/posts/SmallPost";
import MediumPost from "@/components/posts/MediumPost";
import LargePost from "@/components/posts/LargePost";
import AlternativePost from "@/components/posts/AlternativePost";

interface PostsListProps {
	posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }: PostsListProps) => {
	const blogLayout = [LargePost, SmallPost, MediumPost, AlternativePost, AlternativePost, MediumPost, SmallPost];
	console.log(`Number of posts: ${posts.length}`);

	const mlStyle = (index: number) => {
		if (index >= 7 && ((index - 7) % 3 === 1 || (index - 7) % 3 === 2)) {
			return { marginLeft: '15px' };
		}
		return {};
	};

	return (
		<div className={`flex flex-wrap justify-start gap-[60px]`}>
			{posts.map((post, index) => {
				const Layout = blogLayout[index] || SmallPost;
				return (
					<div key={post.id} style={mlStyle(index)}>
						<Layout post={post} />
					</div>
				);
			})}
		</div>
	);
};

export default PostsList;