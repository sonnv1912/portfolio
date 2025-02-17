import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/portfolio',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@data': path.resolve(__dirname, './src/data'),
			'@configs': path.resolve(__dirname, './src/configs'),
			'@layouts': path.resolve(__dirname, './src/layouts'),
		},
	},
	plugins: [react()],
});
