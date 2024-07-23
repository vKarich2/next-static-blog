import WelcomeBlock from "@/components/WelcomeBlock";
import welcomeData from "@/data/welcomeData.json";

const Works = () => {
	return (
		<div className="flex flex-col text-3xl justify-center mt-[100px]">
			<WelcomeBlock {...welcomeData.works} />
			<div>
				<h2 className="font-bold mb-[60px]">Our Works</h2>
			</div>
		</div>
	);
}

export default Works;