import { AboutMe, Skills } from "../components";

export default function Home() {
  return (
		<div className="max-w-[92%] m-auto">
			<div id="aboutMe">
				<AboutMe />
			</div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quis, velit nulla distinctio odit ex officiis cupiditate beatae consequatur eius excepturi quasi quo fugiat aperiam perspiciatis neque nostrum? Quaerat, vitae.
        <Skills/>
      </div>
		</div>
	);
}
