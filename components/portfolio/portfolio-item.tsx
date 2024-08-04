import Image from "next/image";
import { PortfolioItemProps } from "../../base";

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
	img,
	alt,
	name,
	category,
	groups,
	link,
	icon,
}) => (
	<figure className="w-1/3 flex">
		<div className="portfolio-item-img">
			<Image src={img} alt={alt} title="" />
			<a
				href={link}
				className={
					link.includes("http") ? "lightbox mfp-iframe" : "ajax-page-load"
				}
			/>
		</div>
		{icon}
		<h4 className="name">{name}</h4>
		<span className="category">{category}</span>
	</figure>
);
