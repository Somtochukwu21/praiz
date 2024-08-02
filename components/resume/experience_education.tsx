import { experienceData } from "../../base";
import { BlockTitle } from "../Global";
import { Timeline } from "./timeline";

export const ExperienceAndEducation = () => {
	return (
		<div className="flex flex-col md:flex-row text-[#d5d5d5] md:gap-4">
			<div>
				<BlockTitle title="Education" />

				<Timeline data={experienceData} />
			</div>

			<div>
				<BlockTitle title="Experience" />
				<Timeline data={experienceData} />
			</div>
		</div>
	);
};
