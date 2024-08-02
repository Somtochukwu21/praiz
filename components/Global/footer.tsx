import Link from "next/link";
import { socialLinks } from "../../base";
import { Card } from "./card";

export const Footer = () => {
	return (
		<footer className="py-4 mt-16 bg-[#252525]	border-t-2 border-solid border-[#333]">
			<Card className="flex flex-col md:flex-row justify-between text-center">
				<div>
					<ul className="flex gap-6 justify-center">
						{socialLinks.map((social) => (
							<li key={social.id}>
								<Link
									href={social.path}
									target="_blank"
									 className=" text-[#ddd] text-sm	opacity-[0.6] md:transition-opacity md:duration-[.3s] md:ease-in-out"
								>
									{social.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="mt-4">
					<p className="m-0 text-[#ddd] text-sm">
						© 2024 All rights reserved. Somto.
					</p>
				</div>
			</Card>
		</footer>
	);
};
