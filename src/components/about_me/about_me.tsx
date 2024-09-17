"use client";
import Image from "next/image";
import { useImageMovement } from "../../../base";
import { WhatIDo } from "./whatido";

export const AboutMe = () => {
	const { transform, handleMouseMove } = useImageMovement();
	return (
		<div
			onMouseMove={ handleMouseMove }
		>
			<div
				className="flex flex-col my-16 md:flex-row items-center  justify-center gap-12 "
			>
				<div className="relative w-48 h-48 lg:w-[38rem] lg:h-[38rem] rounded-full overflow-hidden border-[20px] border-gray-700 shadow-2xl">
					<div
						className="absolute w-full h-full"
						style={{
							transform: `translate(${transform.x}px, ${transform.y}px)`,
							transition: "transform 0.05s ease-out",
						}}>
						<Image
							src="/images/main_photo.jpg"
							alt="Profile Picture"
							layout="fill"
							objectFit="cover"
							style={{
								scale: "1.1", // Slightly scale the image to make it larger than the container
							}}
						/>
					</div>
				</div>
				<div>
					<div className="text-center md:text-left *:mt-8">
						<h2 className="text-gray-400 text-2xl lg:text-lg">
							Frontend Developer
						</h2>
						<h1 className="text-5xl lg:text-6xl font-bold mt-2 capitalize text-vlr">
							Nnaji somto
						</h1>
						<p className="mt-4 md:max-w-lg lg:max-w-4xl text-gray-400 mx-auto">
							Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
							convallis, risus non condimentum gravida, odio mauris ullamcorper
							felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia
							urna, a placerat sapien pretium eu.
						</p>
					</div>

					<div className="mt-8 flex space-x-4">
						<button className="border-2  border-[#007ced] text-white px-6 py-2 rounded-full hover:bg-[#007ced] transition duration-300">
							Download CV
						</button>
						<button className="border-2 border-red-50 text-vlr px-6 py-2 rounded-full hover:bg-red-50 hover:text-black transition duration-300">
							Contact
						</button>
					</div>
				</div>
			</div>
			<WhatIDo />
		</div>
	);
};
