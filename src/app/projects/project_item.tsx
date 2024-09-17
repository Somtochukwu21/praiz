import Image from "next/image";
import { projectItemsProps } from "../../../base";

export const ProjectItem: React.FC<{
	item: projectItemsProps;
	onClick: (item: projectItemsProps) => void;
}> = ({ item, onClick }) => {
	return (
		<div onClick={() => onClick(item)} className="cursor-pointer">
			<div className="w-full relative group h-96" title="click" tabIndex={0}>
				<div className="h-full relative overflow-hidden rounded-lg w-full">
					<Image
						src={item.img}
						alt={item.alt}
						className="transition-all duration-500 ease-in-out group-hover:scale-110 h-full w-full object-cover"
					/>
				</div>
				<h4 className="inline-block py-1 px-3 m-0 bg-[#222] text-[#f5f5f5] text-sm absolute top-5 left-5 rounded">
					{item.name}
				</h4>
				<span className="group-hover:opacity-100 inline-block py-2 px-3 rounded bg-[#222] text-[#f5f5f5] text-xs bottom-5 left-5 opacity-0 transition-opacity duration-500 absolute ease-in-out">
					{item.category}
				</span>
				<div className="group-hover:opacity-100 text-base text-[#007ced] inline-block py-2 px-3 rounded-sm bg-[#222] text-primary bottom-5 right-5 opacity-0 transition-opacity duration-500 absolute ease-in-out">
					{item.icon}
				</div>
			</div>
		</div>
	);
};
