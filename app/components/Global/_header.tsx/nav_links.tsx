import Link from "next/link";
import { navLinks, NavLinksProp } from "../../../base";

export const NavLinksList: React.FC<NavLinksProp> = ({
	toggleMenu,
	isActive,
}) => (
	<ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
		{navLinks.map((link) => (
			<li key={link.id}>
				<Link
					href={link.path}
					className={`text-[#d5d5d5] text-sm block px-4 md:px-0 md:text-base md:transition-opacity md:duration-[.3s] md:ease-in-out ${isActive(link.path) ? "opacity-100" : "opacity-55 hover:opacity-100"}`}
					onClick={toggleMenu}>
					{link.name}
				</Link>
			</li>
		))}
	</ul>
);
