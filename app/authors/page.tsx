import { getAuthors } from "@/lib/authors";
import AuthorsList from "@/components/ListAuthors";
import WelcomeBlock from "@/components/WelcomeBlock";
import welcomeData from "@/data/welcomeData.json";

const AuthorsPage = () => {
	const authors = getAuthors();
	return (
		<div className="flex flex-col text-3xl justify-center mt-[100px]">
			<WelcomeBlock {...welcomeData.authors} />
			<div>
				<h2 className="font-bold mb-[60px]">Our Authors</h2>
				<AuthorsList authors={authors} />;
			</div>
		</div>
	)
};

export default AuthorsPage;