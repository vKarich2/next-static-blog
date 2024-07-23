import { getPostBySlug } from "@/lib/posts";
import { Post } from "@/types/Post";
import SinglePost from "@/components/SinglePost";

interface PostPageProps {
	params: {
		slug: string;
	};
}

const PostPage: React.FC<PostPageProps> = ({ params }: PostPageProps) => {
	const post: Post | null = getPostBySlug(params.slug);
	console.log("PostPage post:", post);

	if (!post) {
		return <div className="flex text-3xl justify-center font-bold mt-10">Post not found</div>
	}

	return (
		<div className="flex flex-col gap-10">
			<SinglePost post={post} />
			<div className="prose mt-20 max-w-[1320px] flex flex-col items-start" dangerouslySetInnerHTML={{ __html: (post as any).contentHTML || "" }} />
		</div>
	);
}

export default PostPage;