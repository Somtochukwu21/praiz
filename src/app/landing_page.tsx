import Image from "next/image";
import { BlurFade, BoxReveal, TypingAnimation } from "../components";

export const LandingPage = () => {
	return (
		<div className="flex flex-col my-16 md:flex-row items-center  justify-center gap-12 ">
			<div className="relative w-48 h-48 lg:w-[38rem] lg:h-[38rem] rounded-full overflow-hidden border-[20px] border-gray-700 shadow-2xl">
				<BlurFade className="absolute w-full h-full" delay={0.5} inView>
					<Image
						src="/images/main_photo.jpg"
						alt="Profile Picture"
						layout="fill"
						objectFit="cover"
						style={{
							scale: "1.1",
						}}
					/>
				</BlurFade>
			</div>
			<div>
				<div className="text-center md:text-left *:mt-8">
					<BoxReveal boxColor="#1E96FC" duration={0.5}>
						<TypingAnimation
							className="text-gray-400 text-2xl lg:text-lg md:text-left font-light"
							text="Frontend Developer"
						/>
					</BoxReveal>
					<BoxReveal boxColor="#1E96FC" duration={0.5}>
						<h1 className="text-5xl lg:text-6xl font-bold mt-2 capitalize text-vlr">
							Nnaji somto
						</h1>
					</BoxReveal>
					<BoxReveal boxColor="#1E96FC" duration={0.5}>
						<p className="mt-4 md:max-w-lg lg:max-w-4xl text-gray-400 mx-auto">
							Hello! I&apos;m a passionate Frontend-Focused Web Developer with a
							strong dedication to building intuitive, engaging, and efficient
							web experiences. My focus lies in crafting seamless user
							interfaces and ensuring that every project I work on is both
							visually appealing and technically sound.
						</p>
					</BoxReveal>
				</div>
				<BoxReveal boxColor="#1E96FC" duration={0.5}>
					<div className="mt-8 flex space-x-4">
						<button className="border-2  border-[#007ced] text-white px-6 py-2 rounded-full hover:bg-[#007ced] transition duration-300">
							Download CV
						</button>
						<button className="border-2 border-red-50 text-vlr px-6 py-2 rounded-full hover:bg-red-50 hover:text-black transition duration-300">
							Contact
						</button>
					</div>
				</BoxReveal>
			</div>
		</div>
	);
};
