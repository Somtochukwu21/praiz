import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			<div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
				<svg
					className="mb-8 h-64 w-64 animate-float"
					viewBox="0 0 200 200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					{/* Astronaut body */}
					<path
						d="M80 120 L120 120 Q130 120 130 130 L130 180 Q130 190 120 190 L80 190 Q70 190 70 180 L70 130 Q70 120 80 120 Z"
						fill="#fff"
					/>
					{/* Helmet */}
					<circle cx="100" cy="80" r="50" fill="#fff" />
					<circle cx="100" cy="80" r="45" fill="#1E96FC" />
					{/* Visor */}
					<path d="M75 80 Q100 110 125 80" stroke="#fff" strokeWidth="8" />
					{/* Backpack */}
					<rect x="70" y="110" width="60" height="40" rx="10" fill="#d1d5db" />
					{/* Left arm */}
					<path
						d="M70 130 Q40 130 40 160"
						stroke="#fff"
						strokeWidth="10"
						strokeLinecap="round"
					/>
					{/* Right arm */}
					<path
						d="M130 130 Q160 130 160 160"
						stroke="#fff"
						strokeWidth="10"
						strokeLinecap="round"
					/>
					{/* Left leg */}
					<path
						d="M85 190 L85 210"
						stroke="#fff"
						strokeWidth="10"
						strokeLinecap="round"
					/>
					{/* Right leg */}
					<path
						d="M115 190 L115 210"
						stroke="#fff"
						strokeWidth="10"
						strokeLinecap="round"
					/>
					{/* Antenna */}
					<line
						x1="100"
						y1="30"
						x2="100"
						y2="10"
						stroke="#fff"
						strokeWidth="2"
					/>
					<circle cx="100" cy="8" r="3" fill="#fff" />
				</svg>
				<h1 className="mb-4 text-6xl font-bold">404</h1>
				<p className="mb-8 text-2xl">
					Oops! You&apos;ve drifted into deep space.
				</p>
				<Link
					href="/"
					className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
					Return to Earth
			 </Link>
			</div>
		</div>
	);
};

export default NotFound;
