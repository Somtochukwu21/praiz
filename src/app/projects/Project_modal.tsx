"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projectItemsProps } from "../../../base";
import MaterialSymbolsGroupsSharp from "../../../public/icons/MaterialSymbolsGroupsSharp";
import MdiClose from "../../../public/icons/MdiClose";
import PhCalendarBlankFill from "../../../public/icons/PhCalendarBlankFill";
import StreamlineWebSolid from "../../../public/icons/StreamlineWebSolid";

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
		}, 500); // Same duration as animation timing
	};

	if (!project && !isClosing) return null;

	return (
		<div
			className={`fixed inset-0 bg-gray-900  flex justify-center items-center z-50 text-white transition-all ${
				isClosing ? "animate-slide-out" : "animate-slide-in"
			}`}
			onClick={handleClose}>
			<div className="h-full max-w-5xl w-full py-5">
				<div onClick={(e) => e.stopPropagation()}>
					<div className="flex justify-end">
						<button
							className="text-3xl place-content-center flex items-center rounded hover:text-gray-400 focus:outline-none h-12 w-12 bg-gray-800"
							onClick={handleClose}>
							<MdiClose />
						</button>
					</div>
					<h1 className="text-3xl font-semibold my-8">{project.title}</h1>
					<div className="flex flex-col lg:flex-row gap-8">
						<main className="lg:w-1/2 flex-grow">
							<div className="h-96">
								<Image
									src={project.image}
									alt={project.title}
									width={800}
									height={400}
									className="rounded-lg h-full object-cover"
								/>
							</div>
						</main>
						<aside className="lg:w-1/2 bg-gray-800 p-6 rounded-lg border-gray-600 border flex-grow flex flex-col justify-between">
							<div>
								<div className="mb-6">
									<h4 className="font-semibold mb-2">Description</h4>
									{/* <div className="flex gap-2 items-center mb-2">
										<MaterialSymbolsGroupsSharp className="text-blu text-xl" />
										<p>{project.author}</p>
									</div>
									<div className="flex gap-2 items-center mb-2">
										<StreamlineWebSolid className="text-blu text-xl" />
										<a
											href={project.website}
											className="text-blu hover:underline">
											{project.website}
										</a>
									</div>
									<div className="flex gap-2 items-center mb-2">
										<PhCalendarBlankFill className="text-blu text-xl" />{" "}
										{project.date}
									</div>
									<p>{project.description}</p> */}
									<InfoItem
										icon={
											<MaterialSymbolsGroupsSharp className="text-blu text-xl" />
										}
										text={project.author}
									/>
									<InfoItem
										icon={<StreamlineWebSolid className="text-blu text-xl" />}
										text={
											<a
												target="_blank"
												rel="noopener noreferrer"
												href={`https://${project.website}`}
												className="text-blu hover:text-[#ff9800]">
												{project.website}
											</a>
										}
									/>
									<InfoItem
										icon={<PhCalendarBlankFill className="text-blu text-xl" />}
										text={project.date}
									/>
									<p className="pt-4">{project.description}</p>
								</div>
								<div className="mb-6">
									<h3 className="text-xl font-semibold mb-2">Technologies</h3>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech, index) => (
											<span
												key={index}
												className="bg-gray-700 px-2 py-1 rounded text-sm">
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	);
};

const InfoItem: React.FC<{ icon: JSX.Element; text: string | JSX.Element }> = ({
	icon,
	text,
}) => (
	<div className="flex gap-2 items-center mb-2">
		{icon}
		{text}
	</div>
);
