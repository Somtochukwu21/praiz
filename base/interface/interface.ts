import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export interface ServiceBoxProps {
	icon: ReactNode;
	title: string;
	text: string;
}


export interface projectItemsProps {
	img: StaticImageData;
	alt: string;
	name: string;
	category: string;
	groups: string[];
	link: string;
	icon: ReactNode;
	id:number
};