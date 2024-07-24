export interface NavLinksProp {
	toggleMenu?: () => void;
	isActive: (path: string) => boolean;
}
