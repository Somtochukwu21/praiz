"use client";
import { useBackgroundMover } from "./hooks";

export const Background = () => {
	const { containerRef } = useBackgroundMover();
	return <div ref={containerRef} className="lm-animated-bg"></div>;
};
