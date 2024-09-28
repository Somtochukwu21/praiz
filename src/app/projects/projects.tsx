"use client";
import { useState } from "react";
import { projectItems, projectItemsProps } from "../../../base";
import { ScrollReveal } from "../../components/ScrollReveal";
import { BlockTitle } from "../../components/block-title";
import { ProjectModal } from "./Project_modal";
import { ProjectItem } from "./project_item";

export const Projects = () => {
	const [currentProject, setCurrentProject] =
		useState<projectItemsProps | null>(null);

	const handleCloseModal = () => setCurrentProject(null);

	return (
		<div className=" max-w-[1760px] mx-auto">
			<BlockTitle title="Projects" />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{projectItems.map((item) => (
					<div key={item.id}>
						<ScrollReveal delay={item.delay}>
							<ProjectItem item={item} onClick={setCurrentProject} />
						</ScrollReveal>
					</div>
				))}
			</div>

			{currentProject && (
				<ProjectModal project={currentProject} onClose={handleCloseModal} />
			)}
		</div>
	);
};

export default Projects;
