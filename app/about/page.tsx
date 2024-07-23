import WelcomeBlock from "@/components/WelcomeBlock";
import welcomeData from "@/data/welcomeData.json";

const About = () => {
  return (
    <div className="flex flex-col text-3xl justify-center mt-[100px]">
      <WelcomeBlock {...welcomeData.about} />
      <div>
        <h2 className="font-bold mb-[60px]">About Us</h2>
      </div>
    </div>
  );
}

export default About;