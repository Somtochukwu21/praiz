"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projectItemsProps } from "../../../base";

export const ProjectModal: React.FC<{
	project: projectItemsProps;
	onClose: () => void;
}> = ({ project, onClose }) => {
	const [isClosing, setIsClosing] = useState(false);

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			onClose();
		}, 500);
	};

	if (!project && !isClosing) return null;

	return (
		<div
			className={`fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 ${
				isClosing ? "animate-slide-out" : "animate-slide-in"
			}`}
			onClick={handleClose} // Close the modal when the overlay is clicked
		>
			<div
				className="relative w-full h-full p-6 flex flex-col justify-center items-center text-center max-w-4xl"
				onClick={(e) => e.stopPropagation()} // Prevent the modal content click from closing the modal
			>
				<button
					className="absolute top-5 right-5 text-white text-3xl hover:text-gray-400 focus:outline-none"
					onClick={handleClose}>
					&times;
				</button>
				<Image
					src={project.img}
					alt={project.alt}
					className="rounded-lg mb-4 w-full h-96 object-cover"
				/>
				<h2 className="text-4xl font-semibold text-white mb-2">
					{project.name}
				</h2>
				<p className="text-lg text-gray-300">{project.category}</p>
				{/* Additional project details */}
			</div>
		</div>
	);
};
