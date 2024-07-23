import { getAuthors } from "@/lib/authors";
import AuthorsList from "@/components/ListAuthors";

const AuthorsPage = () => {
	const authors = getAuthors();
	return <AuthorsList authors={authors} />;
};

export default AuthorsPage;