import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@data': path.resolve(__dirname, './src/data'),
			'@config': path.resolve(__dirname, './src/config'),
		},
	},
	base: '/portfolio/',
	plugins: [react()],
});
