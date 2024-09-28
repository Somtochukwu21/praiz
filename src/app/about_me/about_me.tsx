import { GetToKnowMe } from "./get_to_know_me";
import { Skills } from "./skills";
import { WhatIDo } from "./whatido";

export const AboutMe = () => {
	return (
		<div className=" max-w-[1760px] mx-auto">
			<div className="grid grid-cols-2 ">
				<GetToKnowMe />
				<Skills />
			</div>
			<WhatIDo />
		</div>
	);
};
