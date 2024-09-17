'use client'
import { useState } from "react";
export const useImageMovement = () => {
	const [transform, setTransform] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY, currentTarget } = e;
		const rect = currentTarget.getBoundingClientRect();
		const x = (clientX - rect.left) / rect.width - 0.5; // normalize to [-0.5, 0.5]
		const y = (clientY - rect.top) / rect.height - 0.5; // normalize to [-0.5, 0.5]

		// Set a limited transform to avoid gaps on the sides
		setTransform({ x: x * 10, y: y * 10 }); // Adjust multiplier to control the range of movement
	};

	return { transform, handleMouseMove };
};
