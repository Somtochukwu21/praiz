import { Hero, Testimonial, WhatIDo,Clients } from "./components";

export default function Home() {
	return (
		<div>
			<Hero />
			<WhatIDo />
			<Testimonial />
			<Clients />
		</div>
	);
}
