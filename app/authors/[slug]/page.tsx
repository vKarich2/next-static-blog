import { getAuthorBySlug } from "@/lib/authors";
import { Author } from "@/types/Author";
import SingleAuthor from "@/components/SingleAuthor";

interface AuthorPageProps {
	params: {
		slug: string;
	};
}

const AuthorPage: React.FC<AuthorPageProps> = ({ params }: AuthorPageProps) => {
	const author: Author | null = getAuthorBySlug(params.slug);
	console.log("AuthorPage author:", author);

	if (!author) {
		return <div className="flex text-3xl justify-center font-bold mt-10">Author not found</div>;
	}

	return (
		<div className="flex flex-col items-center">
			<SingleAuthor author={author} />
			<div className="prose mt-20" dangerouslySetInnerHTML={{ __html: ((author as any).contentHTML) || "" }} />
		</div>
	);
};

export default AuthorPage;