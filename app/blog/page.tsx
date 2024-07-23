import PostsList from "@/components/ListPosts";
import { getPosts } from "@/lib/posts";

const Blog = () => {
	const posts = getPosts();
	return (
		<div className="flex flex-col text-3xl justify-center mt-[100px]">
			<div className="flex flex-col items-center mb-[60px]">
				<h2 className="text-center text-lg font-bold font-black uppercase">WHERE IDEAS MEET INSIGHTS</h2>
				<p className="text-center text-2xl font-extralight font-[#444444] max-w-[530px] mt-8">Welcome to our blog! We inspire and inform, offering unique insights into contemporary topics from experts across various fields</p>
			</div>
			<PostsList posts={posts} />
		</div>
	);
}

export default Blog;