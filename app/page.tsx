import RecentPosts from "@/components/RecentPosts"
import WelcomeBlock from "@/components/WelcomeBlock"
import { getPosts } from "@/lib/posts"
import welcomeData from "@/data/welcomeData.json"

export default function Home() {
  const recentPosts = getPosts();
  return (
    <div className="flex flex-col text-3xl mt-16">
      <WelcomeBlock {...welcomeData.home} />
      <div>
        <h2 className="font-bold mb-[60px]">Recent Posts</h2>
        <RecentPosts posts={recentPosts} />
      </div>
    </div>
  );
}
