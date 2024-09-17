import Link from "next/link";
import Image from "next/image";
import { projectItems, projectItemsProps } from "../../../base";
import { BlockTitle } from "../block-title";

const ProjectItem: React.FC<projectItemsProps> = ({
	img,
	alt,
	name,
	category,
	icon,
	id,  
}) => (
	<Link href={`#projects/${id}`} passHref scroll={false}>
		<div
			className="w-full relative group h-96 cursor-pointer"
			title="click"
			tabIndex={0}>
			<div className="h-full relative overflow-hidden rounded-lg w-full">
				<Image
					src={img}
					alt={alt}
					title=""
					className="transition-all duration-500 ease-in-out group-hover:scale-110 h-full w-full object-cover"
				/>
			</div>
			<h4 className="inline-block py-1 px-3 m-0 bg-[#222] text-[#f5f5f5] text-sm absolute top-5 left-5 rounded max-w-[calc(100%-67px)]">
				{name}
			</h4>
			<span className="group-hover:opacity-100 inline-block py-2 px-3 rounded bg-[#222] text-[#f5f5f5] text-xs bottom-5 left-5 opacity-0 transition-opacity duration-500 absolute ease-in-out">
				{category}
			</span>
			<div className="group-hover:opacity-100 text-base text-[#007ced] inline-block py-2 px-3 rounded-sm bg-[#222] text-primary bottom-5 right-5 opacity-0 transition-opacity duration-500 absolute ease-in-out">
				{icon}
			</div>
		</div>
	</Link>
);

export const Projects = () => {
	return (
		<div>
			<BlockTitle title="Projects" />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{projectItems.map((item) => (
					<ProjectItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};
