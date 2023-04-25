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
			},
			animation:{
				'rotate': 'rotate 3s linear infinite',
				'rotateRev': 'rotateRev 3s linear infinite'
			},
			keyframes : {
				rotate:{
					'0%':{
						transform : 'translate(-50%,-50%) rotate(0deg)'
					},
					'100%' : {
						transform : 'translate(-50%,-50%) rotate(360deg)'
					}
				},
				rotateRev:{
					'0%':{
						transform : 'translate(-50%,-50%) rotate(360deg)'
					},
					'100%' : {
						transform : 'translate(-50%,-50%) rotate(0deg)'
					}
				}
			}
		},
	},
	plugins: [],
}