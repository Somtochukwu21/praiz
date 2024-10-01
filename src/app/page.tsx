"use client";
import { useEffect, useState } from "react";
import { Footer, Header } from "../components";

import { AboutMe } from "./about_me";
import { ContactMe } from "./contact_me";
import { LandingPage } from "./landing_page";
import Loading from "./loading";
import { Projects } from "./projects";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 0.2);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return <Loading />;
	}
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
