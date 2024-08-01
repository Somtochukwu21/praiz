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
