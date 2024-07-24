"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Card } from "./card";

const NavLinks = [
	{ id: 1, name: "About Me", path: "/" },
	{ id: 2, name: "Resume", path: "/resume" },
	{ id: 3, name: "Portfolio", path: "/portfolio" },
	{ id: 4, name: "Contact", path: "/contact" },
];

const MobileMenuIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<div className="inline-block cursor-pointer" onClick={onClick}>
		<div className="bar1 w-[25px] h-[4px] rounded-[5px] bg-[#d2c3c3] my-[4px] transition duration-[0.4s]" />
		<div className="bar2 w-[25px] h-[4px] rounded-[5px] bg-[#d2c3c3] my-[4px] transition duration-[0.4s]" />
		<div className="bar3 w-[25px] h-[4px] rounded-[5px] bg-[#d2c3c3] my-[4px] transition duration-[0.4s]" />
	</div>
);

const NavLinksList: React.FC<{
	toggleMenu: () => void;
	isActive: (path: string) => boolean;
}> = ({ toggleMenu, isActive }) => (
	<ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
		{NavLinks.map((link) => (
			<li key={link.id}>
				<Link
					href={link.path}
					className={`text-[#f5f5f5] text-sm md:text-lg block px-4 ${
						isActive(link.path) ? "opacity-100" : "opacity-55 hover:opacity-100"
					}`}
					onClick={toggleMenu}>
					{link.name}
				</Link>
			</li>
		))}
	</ul>
);

export const Header: React.FC = () => {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	const isActive = (path: string) => path === pathname;

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<Card className="relative  md:p-[40px_70px_60px] ">
			<header className="z-10 flex h-[50px] justify-between items-center fixed bg-primary px-3 py-4 md:px-0 md:py-0 md:pb-10 md:h-auto w-full md:static">
				<div>
					<Link href="/" className="outline-none flex items-center">
						<div className="w-8 h-8 leading-8 text-lg bg-secondary rounded-full text-white text-center font-bold mr-2 md:w-11 md:text-[28px] md:leading-[44px] md:h-11">
							P
						</div>
						<div className="text-white leading-8 text-lg font-semibold [&>span]:font-normal md:leading-[50px] md:text-xl ">
							Praiz <span>Dev</span>
						</div>
					</Link>
				</div>
				<div className="md:hidden">
					<MobileMenuIcon onClick={toggleMenu} />
				</div>
				<nav className="hidden md:flex">
					<ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
						{NavLinks.map((link) => (
							<li key={link.id}>
								<Link
									href={link.path}
									className={`text-[#f5f5f5] text-sm md:text-lg block px-4 ${
										isActive(link.path)
											? "opacity-100"
											: "opacity-55 hover:opacity-100"
									}`}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>

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
						<MobileMenuIcon onClick={toggleMenu} />
					</div>
					<nav className="mt-20">
						<NavLinksList toggleMenu={toggleMenu} isActive={isActive} />
					</nav>
				</div>
			</div>
		</Card>
	);
};
