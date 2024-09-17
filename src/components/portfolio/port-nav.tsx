import { projectNav } from "../../../base/data/ProjectNav";

export const PortNav = () => {
	return (
		<ul className="mb-8 portfolio-filters text-right flex gap-4 justify-end">
			{projectNav.map((category) => (
				<li key={category}>
					<a
						className="text-[#f5f5f5] text-xs leading-6 py-1 px-4 opacity-50 cursor-pointer hover:opacity-100"
						data-group={`category_${category.toLowerCase().replace(" ", "-")}`}>
						{category}
					</a>
				</li>
			))}
		</ul>
	);
};
