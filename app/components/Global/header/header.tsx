"use client";
import Link from "next/link";
import React from "react";
import { HiMenu } from "react-icons/hi";
import { useActiveLink, useToggleMenu } from "../../../base";
import { Card } from "../card";
import { MobileMenu } from "./mobile_menu";
import { NavLinksList } from "./nav_links";

export const Header: React.FC = () => {
	const { toggleMenu, menuOpen } = useToggleMenu();
	const { isActive } = useActiveLink();

	return (
		<div className="relative md:pt-10 md:pb-0	md:px-[70px]">
			<Card className="">
				<header className=" z-10 flex h-[50px] justify-between items-center fixed bg-primary px-3 py-4 md:px-0 md:py-0 md:pb-10 md:h-auto w-full md:static">
					<div>
						<Link href="/" className="outline-none flex items-center">
							<div className="w-8 h-8 leading-8 text-lg bg-secondary rounded-full text-[#d5d5d5] text-center font-bold mr-2 md:w-11 md:text-[28px] md:leading-[44px] md:h-11">
								S
							</div>
							<div className="text-[#d5d5d5] leading-8 text-lg font-semibold [&>span]:font-normal md:leading-[50px] md:text-xl ">
								Somto <span>Nnaji</span>
							</div>
						</Link>
					</div>
					<div className="md:hidden">
						<HiMenu
							className="text-[#d2c3c3] text-[25px]"
							onClick={toggleMenu}
						/>
					</div>
					<nav className="hidden md:flex">
						<NavLinksList isActive={isActive} />
					</nav>
				</header>

				<MobileMenu
					isActive={isActive}
					toggleMenu={toggleMenu}
					menuOpen={menuOpen}
				/>
			</Card>
		</div>
	);
};
