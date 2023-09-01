module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			pinpoint: "#F1F152",
			wisdom: "#AFB9B4",
			"dark-text": "#1F2725",
		},
		container: (theme) => ({
			maxWidth: "100%",
			center: true,
			padding: {
				DEFAULT: theme("spacing.6"),
				lg: theme("spacing.12"),
			},
		}),
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms")],
};
