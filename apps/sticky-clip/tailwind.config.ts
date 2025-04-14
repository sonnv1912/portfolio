import { theme } from '@packages/configs/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: theme,
   },
   plugins: [],
};
