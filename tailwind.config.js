/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors:{
				strangerRed : '#ff1515',
				strangerBlue : '#3a5fe5',
				strangerGreen : '#073e1e',
				strangerBlack : '#1e0707',
				strangerDark : '#1e193c'
			},
			fontFamily:{
				strange : 'custom'
			}
		},
	},
	plugins: [],
}