import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export interface ServiceBoxProps {
	icon: ReactNode;
	title: string;
	text: string;
}

export interface projectItemsProps {
	id: number;
	icon: ReactNode;
	title: string;
	image: StaticImageData;
	author: string;
	website: string;
	date: string;
	delay: number;
	description: string;
	technologies: string[];
}
