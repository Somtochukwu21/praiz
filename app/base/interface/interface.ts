import { ReactNode } from "react";

export interface NavLinksProp {
	toggleMenu?: () => void;
	isActive: (path: string) => boolean;
}

export interface ServiceBoxProps{
	icon: ReactNode; title: string;text:string
}