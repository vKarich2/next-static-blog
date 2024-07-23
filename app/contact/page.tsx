import WelcomeBlock from "@/components/WelcomeBlock";
import welcomeData from "@/data/welcomeData.json";

const Contact = () => {
	return (
		<div className="flex flex-col text-3xl justify-center mt-[100px]">
			<WelcomeBlock {...welcomeData.contact} />
			<div>
				<h2 className="font-bold mb-[60px]">Contact Us</h2>
			</div>
		</div>
	);
}

export default Contact;