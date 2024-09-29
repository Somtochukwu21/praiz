"use client";
import { Footer, Header } from "../components";

import { AboutMe } from "./about_me";
import { ContactMe } from "./contact_me";
import { LandingPage } from "./landing_page";
import { Projects } from "./projects";

export default function Home() {
	return (
		<div>
			<Header />

			<div className="max-w-[92%] m-auto">
				<LandingPage />
				<div id="aboutMe">
					<AboutMe />
				</div>
				<div id="projects" className="my-16">
					<Projects />
					<div id="contact" className="my-16">
						<ContactMe />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}