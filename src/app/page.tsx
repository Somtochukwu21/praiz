import { AboutMe } from "./about_me";
import { Projects } from "./projects";
import { Skills } from "./skills";

export default function Home() {
	return (
		<div className="max-w-[92%] m-auto">
			<div id="aboutMe">
				<AboutMe />
			</div>
			<div id="skills">
				<Skills />
			</div>
			<div id="projects">
				<Projects />
			</div>
		</div>
	);
}
