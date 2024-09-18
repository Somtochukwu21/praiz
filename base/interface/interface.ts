import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export interface ServiceBoxProps {
	icon: ReactNode;
	title: string;
	text: string;
}
/*
export interface Project {
	alt: string;
	name: string;
	category: string;
	groups: string[];
	
}
	
interface Project {
	id: number;
	title: string;
	images: string[];
	author: string;
	website: string;
	date: string;
	description: string;
	technologies: string[];
}

*/

export interface projectItemsProps {
	id: number;
	icon: ReactNode;
	title: string;
	image: StaticImageData;
	author: string;
	website: string;
	date: string;
	description: string;
	technologies: string[];
}
