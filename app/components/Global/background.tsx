"use client";

import { useBackgroundMover } from "../../base";

export const Background = () => {
	const { containerRef } = useBackgroundMover();
	return <div ref={containerRef} className="lm-animated-bg"></div>;
};
