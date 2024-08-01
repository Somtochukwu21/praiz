import { experienceData } from "../../base";
import { BlockTitle } from "../Global";
import { Timeline } from "./timeline";

export const ExperienceAndEducation = () => {
	return (
		<div className="flex text-[#d5d5d5] gap-4">
			<div>
				<BlockTitle title="Education" />

				<Timeline data={experienceData} />
			</div>

			<div className="block-title">
				<BlockTitle title="Experience" />
				<Timeline data={experienceData} />
			</div>
		</div>
	);
};
