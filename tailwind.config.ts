import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderColor: { secondary: "#007ced" },
			backgroundColor: { secondary: "#007ced", primary: "#222222" },
		},
	},
	plugins: [],
};
export default config;
