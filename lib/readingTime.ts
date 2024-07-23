import readingTime from "reading-time";

export default function getReadingTime(content: string) {
	return readingTime(content);
}