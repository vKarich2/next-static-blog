import PostsList from "@/components/ListPosts";
import { getPosts } from "@/lib/posts";
import welcomeData from "@/data/welcomeData.json";
import WelcomeBlock from "@/components/WelcomeBlock";

const Blog = () => {
	const posts = getPosts();
	return (
		<div className="flex flex-col text-3xl justify-center mt-[100px]">
			<WelcomeBlock {...welcomeData.blog} />
			<div>
				<h2 className="font-bold mb-[60px]">All Posts</h2>
				<PostsList posts={posts} />
			</div>
		</div>
	);
}

export default Blog;