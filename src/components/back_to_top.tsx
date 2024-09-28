"use client";
import React, { useEffect, useState } from "react";
import MaterialSymbolsLightArrowWarmUpRounded from "../../public/icons/MaterialSymbolsLightArrowWarmUpRounded";

export const BackToTopButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 p-2 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50"
					aria-label="Back to top">
					<MaterialSymbolsLightArrowWarmUpRounded className="text-2xl" />
				</button>
			)}
		</>
	);
};
