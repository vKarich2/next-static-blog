import { Author } from "@/types/Author";
import SingleAuthor from "@/components/SingleAuthor";

interface AuthorsListProps {
	authors: Author[];
}

const AuthorsList: React.FC<AuthorsListProps> = ({ authors }: AuthorsListProps) => {

	return (
		<div className="grid grid-cols-5 grid-rows-2 gap-x-[98px] gap-y-[60px]">
			{authors.map((author) => (
				<SingleAuthor key={author.id} author={author} isSingleAuthorPage={false} />
			))}
		</div>
	);
};

export default AuthorsList;