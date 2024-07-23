"use client"

import { Post } from "@/types/Post"
import SmallPost from "./posts/SmallPost"
import MediumPost from "./posts/MediumPost"
import AlternativePost from "./posts/AlternativePost"

interface RecentPostsProps {
	posts: Post[]
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }: RecentPostsProps) => {
	const recentPostsLayout = [MediumPost, SmallPost, AlternativePost, AlternativePost, SmallPost, MediumPost]

	const recentPosts = posts.slice(0, 6);
	return (
		<div className={`flex flex-wrap justify-start gap-[60px]`}>
			{recentPosts.map((post, index) => {
				const Layout = recentPostsLayout[index % recentPostsLayout.length];
				return (
					<div key={post.id}>
						<Layout post={post} />
					</div>
				);
			})}
		</div>
	);
}

export default RecentPosts