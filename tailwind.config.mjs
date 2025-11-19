/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		// Removed @tailwindcss/typography to reduce bundle size from 91KB to ~10KB
		// Custom prose styles added inline in slug pages where needed
	],
}
