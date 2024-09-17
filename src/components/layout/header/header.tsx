"use client";
import Link from "next/link";
import { useState } from "react";
import { MdiLightHamburger } from "../../../../public/icons/MdiLightHamburger";
export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
		console.log(menuOpen);
	};
	return (
		<header className="py-6 md:py-10 bg-accent md:bg-transparent md:text-vlr ">
			<nav className="flex justify-between items-center max-w-[92%]  mx-auto">
				<div className="flex font-semibold  items-center gap-2">
					<p className="mt-2 uppercase font-bold text-lg">nnaji somto</p>
				</div>

				<div
					className={`z-10 duration-500 md:static absolute bg-accent md:bg-transparent md:min-h-fit min-h-72 left-0 md:w-auto  w-full  flex items-center px-5 ${
						menuOpen ? "top-20" : "-top-96"
					}`}>
					<ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
						<li>
							<Link className="md:hover:text-gray-400" href="#aboutMe">
								About me
							</Link>
						</li>
						<li>
							<a className="md:hover:text-gray-400" href="#skills">
								Skills
							</a>
						</li>
						<li>
							<a className="md:hover:text-gray-400" href="#projects">
								Projects
							</a>
						</li>
						<li>
							<a className="md:hover:text-gray-400" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className="md:hidden">
					<MdiLightHamburger
						onClick={toggleMenu}
						name="menu"
						className="text-3xl cursor-pointer"
					/>
				</div>
			</nav>
		</header>
	);
};
