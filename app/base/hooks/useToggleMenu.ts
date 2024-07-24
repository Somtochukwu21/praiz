import { useState } from "react";

export const useToggleMenu = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);
	return { menuOpen, toggleMenu };
};
