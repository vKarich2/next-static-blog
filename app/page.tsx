import RecentPosts from "@/components/RecentPosts"
import { getPosts } from "@/lib/posts"

export default function Home() {
  const recentPosts = getPosts();
  return (
    <div className="flex justify-center text-3xl mt-10">
      <div>
        <h2 className="font-bold mb-[60px]">Recent Posts</h2>
        <RecentPosts posts={recentPosts} />
      </div>
    </div>
  );
}
