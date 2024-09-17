import Image from "next/image";
import { projectItems, projectItemsProps } from "../../../base";
import { BlockTitle } from "../block-title";

export const Projects = () => {
	return (
		<div>
			<BlockTitle title="Projects" />
			{,projectItems.map((item) => (
				// <PortfolioItem key={item.name} {...item} />
			<ProjectItem />
			))}
		</div>
	);
};


export const ProjectItem: React.FC<projectItemsProps> = ({
	img,
	alt,
	name,
	category,

	icon,
}) => (
	<figure className="w-full relative group ">
		<div className="relative overflow-hidden rounded-lg">
			<Image
				src={img}
				alt={alt}
				title=""
				className="	transition-all duration-500 ease-in-out group-hover:scale-110"
			/>
		</div>
		<h4 className="inline-block py-1 px-3 m-0 bg-[#222] text-[#f5f5f5] text-sm	absolute top-5 left-5 rounded	max-w-[calc(100%-67px)]">
			{name}
		</h4>
		<span className="group-hover:opacity-100 inline-block py-2 px-3 rounded bg-[#222] text-[#f5f5f5] text-xs bottom-5 left-5 opacity-0 transition-opacity duration-500 absolute ease-in-out ">
			{category}
		</span>
		<div className="group-hover:opacity-100 text-base text-[#007ced] inline-block py-2 px-3 rounded-sm bg-[#222] text-primary bottom-5 right-5 opacity-0 transition-opacity duration-500 absolute ease-in-out">
			{icon}
		</div>
	</figure>
);
