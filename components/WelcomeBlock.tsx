import React from "react"

interface WelcomeBlockProps {
    title: string;
    description: string;
}

const WelcomeBlock: React.FC<WelcomeBlockProps> = ({ title, description }) => {
    return (
			<div className="flex flex-col items-center mb-[60px]">
				<h2 className="text-center text-lg font-bold text-black uppercase">{title}</h2>
				<p className="text-center text-2xl font-extralight font-[#444444] max-w-[530px] mt-8">{description}</p>
			</div>
    )
}

export default WelcomeBlock;