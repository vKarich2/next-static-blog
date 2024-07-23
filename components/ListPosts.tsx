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

	return (
		<div className={`flex flex-wrap justify-center gap-[60px]`}>
			{posts.map((post, index) => {
				const Layout = blogLayout[index] || SmallPost;
				return (
					<div key={post.id}>
						<Layout post={post} />
					</div>
				);
			})}
		</div>
	);
};

export default PostsList;