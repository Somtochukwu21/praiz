import { MdClose } from "react-icons/md";
import { NavLinksProp } from "../../../base";
import { NavLinksList } from "./nav_links";

interface MobileMenuProps extends NavLinksProp {
	menuOpen: boolean;
}

export const MobileMenu = ({
	isActive,
	menuOpen,
	toggleMenu,
}: MobileMenuProps) => {
	return (
		<div
			className={`fixed inset-0 bg-primary bg-opacity-50 z-50 ${
				menuOpen ? "visible" : "invisible"
			}`}
			onClick={toggleMenu}>
			<div
				className={`fixed right-0 top-0 w-64 h-full bg-primary shadow-lg transform ${
					menuOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out`}
				onClick={(e) => e.stopPropagation()}>
				<div className={`absolute top-3 right-4 ${menuOpen && "change"}`}>
					<MdClose
						onClick={toggleMenu}
						className="text-[#d2c3c3] text-[25px]"
					/>
				</div>
				<nav className="mt-20">
					<NavLinksList toggleMenu={toggleMenu} isActive={isActive} />
				</nav>
			</div>
		</div>
	);
};
