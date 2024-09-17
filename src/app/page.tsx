import { AboutMe, Projects, Skills } from "../components";

export default function Home() {
	return (
		<div className="max-w-[92%] m-auto">
			<div id="aboutMe">
				<AboutMe />
			</div>
			<div id="skills">
				<Skills />
			</div>
      <div id="projects"><Projects /></div>
		</div>
	);
}
