import React from "react";
import { BlockTitle, ScrollReveal } from "../../components";
import { Form } from "./form";

export const ContactMe: React.FC = () => {
	return (
		<div className=" max-w-[1760px]  mx-auto">
			<BlockTitle title="contact me" />
			<ScrollReveal
				className=" flex items-stretch justify-center relative overflow-hidden"
				delay={0.5}>
				<div className="w-full  backdrop-filter backdrop-blur  z-10 flex flex-col md:flex-row">
					<div className="md:w-1/2 p-12 flex flex-col justify-center items-center md:items-start">
						<p className="text-xl text-gray-300 mb-12 max-w-2xl text-center md:text-left">
							Have questions or want to collaborate? Reach out to me and
							let&apos;s explore the cosmic possibilities together. I always
							ready for the next big adventure!
						</p>
					</div>
					<div className="md:w-1/2 p-12 bg-card  flex items-center justify-center">
						<Form />
					</div>
				</div>
			</ScrollReveal>
		</div>
	);
};
