import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface NavLinksProp {
	toggleMenu?: () => void;
	isActive: (path: string) => boolean;
}

export interface ServiceBoxProps {
	icon: ReactNode;
	title: string;
	text: string;
}

export interface PageTitleProps {
	header: string;
	text: string;
}

export type ExperienceAndEducationType = {
	period: string;
	company: string;
	title: string;
	description: string;
}[];

export interface TimeLineProps {
	data: ExperienceAndEducationType;
}


export interface  PortfolioItemProps  {
	img: StaticImageData;
	alt: string;
	name: string;
	category: string;
	groups: string[];
	link: string;
	icon: ReactNode;
};