const em = (px, base) => `${round(px / base)}em`
const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '')
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			padding: '1rem',
		},
		fontFamily: {
			sans: ['"Spartan"', 'sans-serif'],
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			fontSize: {
				'6.5xl': '64px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
