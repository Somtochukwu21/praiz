import { BlockTitle, Button } from "../../components";
import { ScrollReveal } from "../../components/ScrollReveal";

export const GetToKnowMe = () => {
	return (
		<div>
			<BlockTitle title="Get to Know Me!" />

			<ScrollReveal className="text-vlr leading-relaxed space-y-4 backdrop-filter backdrop-blur">
				<p className="text-lg mb-6">
					Hello! I&apos;m a passionate{" "}
					<span className="text-blue-400 font-semibold">
						Frontend-Focused Web Developer
					</span>{" "}
					with a strong dedication to building intuitive, engaging, and
					efficient web experiences. My focus lies in crafting seamless user
					interfaces and ensuring that every project I work on is both visually
					appealing and technically sound.
				</p>
				<p className="text-lg mb-6">
					Throughout my journey, I&apos;ve honed my skills in technologies like
					<span className="text-blue-400 font-semibold">
						JavaScript, React, Next.js, Tailwind CSS, React Native, e.t.c
					</span>
					. I thrive in collaborative environments where creativity meets
					functionality, and I enjoy tackling complex challenges that push my
					technical limits.
				</p>
				<p className="text-lg mb-6">
					I&apos;m always eager to learn and grow, whether it&apos;s by
					exploring new technologies or collaborating with talented teams. If
					you have an opportunity that aligns with my experience, I&apos;d love
					to connect and explore how we can work together to create something
					amazing.
				</p>

				<div className="mt-6">
					<Button>Contact Me</Button>
				</div>
			</ScrollReveal>
		</div>
	);
};
