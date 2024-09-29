import React from "react";
import { Particles } from "../components";

const Loading: React.FC = () => {
	const createPlanetStyle = (orbitSize: number, orbitPeriod: number) =>
		({
			"--orbit-size": `${orbitSize}px`,
			"--orbit-period": `${orbitPeriod}s`,
		} as React.CSSProperties);

	return (
			<div className="fixed inset-0 flex items-center justify-center bg-primary">
				<div className="relative w-64 h-64">
					<div className="absolute inset-0 border-2 border-blue-300 rounded-full opacity-20"></div>
					<div className="absolute inset-8 border-2 border-blue-300 rounded-full opacity-20"></div>
					<div className="absolute inset-16 border-2 border-blue-300 rounded-full opacity-20"></div>
					<div className="absolute inset-24 border-2 border-blue-300 rounded-full opacity-20"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
					<div className="planet-orbit" style={createPlanetStyle(120, 3)}>
						<div className="w-2 h-2 bg-red-500 rounded-full"></div>
					</div>
					<div className="planet-orbit" style={createPlanetStyle(92, 7)}>
						<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
					</div>
					<div className="planet-orbit" style={createPlanetStyle(68, 12)}>
						<div className="w-4 h-4 bg-green-500 rounded-full"></div>
					</div>
					<div className="planet-orbit" style={createPlanetStyle(40, 20)}>
						<div className="w-5 h-5 bg-orange-500 rounded-full"></div>
					</div>
				</div>
			</div>
 
	);
};

export default Loading;
