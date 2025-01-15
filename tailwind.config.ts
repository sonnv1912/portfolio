import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'ibm-plex-mono': 'ibm-plex-mono',
				semibold: 'semi-b-ibm-plex-mono',
				'b-ibm-plex-mono': 'b-ibm-plex-mono',
				'eb-raleway': 'eb-raleway',
				raleway: 'raleway',
				sans: ['ibm-plex-mono', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				woodsmoke: {
					50: '#f6f6f6',
					100: '#e7e7e7',
					200: '#d1d1d1',
					300: '#b0b0b0',
					400: '#888888',
					500: '#6d6d6d',
					600: '#5d5d5d',
					700: '#4f4f4f',
					800: '#454545',
					900: '#3d3d3d',
					950: '#1b1b1b',
				},
				black: '#181818',
			},
		},
	},
	plugins: [],
};
