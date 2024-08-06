import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				custom: "0 0 25px 0 rgba(0, 0, 0, 0.11)",
			},
			borderColor: { secondary: "#007ced" },
			backgroundColor: { secondary: "#007ced", primary: "#222222" },
		},
	},

	plugins: [   ]
};

export default config;
