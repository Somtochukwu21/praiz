import { useEffect, useRef } from "react";

export const useBackgroundMover = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (containerRef.current) {
				const { clientWidth, clientHeight } = containerRef.current;
				const centerX = clientWidth / 2;
				const centerY = clientHeight / 2;
				const moveAmount = 15; // Amount of movement

				const x = ((e.clientX - centerX) / centerX) * moveAmount;
				const y = ((e.clientY - centerY) / centerY) * moveAmount;

				containerRef.current.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
			}
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return { containerRef };
};
