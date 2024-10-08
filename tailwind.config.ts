import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},

		extend: {
			backgroundColor: {
				primary: "#1A202C",
				secondary: "#1E96FC",
				accent: "#F7FFF7",
				card: "#1f2937",
			},
			colors: {
				vlr: "#fef2f2",
				blu: "#1E96FC",
			},

			keyframes: {
				slideIn: {
					"0%": { transform: "translateX(100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},

				slideOut: {
					"0%": { transform: "translateX(0)", opacity: "1 " },
					"100%": { transform: "translateX(-100%)", opacity: "0" },
				},

				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
				},
			},
			animation: {
				float: "float 6s ease-in-out infinite",
				"slide-in": "slideIn 0.5s ease-out",

				"slide-out": "slideOut 0.5s ease-in",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
