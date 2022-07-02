const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		},
		boxShadow:{
			1: '4px',
		}
	},
	plugins: [
		plugin(function({matchUtilities,theme}){
			matchUtilities(
				{
					shadow: (value) => ({
						boxShadow: `0 0 ${value} 0 var(--tw-shadow-color,black)`
					})
				},
				{
					values: theme('boxShadow')
				}
			)
		})
	],
}
