import { BlockTitle } from "../../components";
import { ScrollReveal } from "../../components/ScrollReveal";

export const GetToKnowMe = () => {
	return (
		<div>
			<BlockTitle title="Get to Know Me!" />
		
				<ScrollReveal className="text-vlr leading-relaxed space-y-4 bg-red-600 " >
					<p className="mt-6">
						Hello! I&apos;m a passionate <b>Frontend-Focused Web Developer</b>{" "}
						with a strong dedication to building intuitive, engaging, and
						efficient web experiences. My focus lies in crafting seamless user
						interfaces and ensuring that every project I work on is both
						visually appealing and technically sound.
					</p>
					<p>
						Throughout my journey, I&apos;ve honed my skills in technologies
						like <b>JavaScript, React, Next.js, and Tailwind CSS</b>. I thrive
						in collaborative environments where creativity meets functionality,
						and I enjoy tackling complex challenges that push my technical
						limits.
					</p>
					<p>
						I&apos;m always eager to learn and grow, whether it&apos;s by
						exploring new technologies or collaborating with talented teams. If
						you have an opportunity that aligns with my experience, I&apos;d
						love to connect and explore how we can work together to create
						something amazing.
					</p>

					<div className="mt-6">
						<button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
							Contact Me
						</button>
					</div>
				</ScrollReveal>
			
		</div>
	);
};

