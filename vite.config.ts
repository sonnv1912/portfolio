import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   base: '/portfolio',
   server: {
      port: 2222,
   },
   preview: {
      port: 2222,
   },
   resolve: {
      alias: [
         {
            find: '@components',
            replacement: path.resolve(__dirname, './src/components'),
         },
         { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
         { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
         {
            find: '@configs',
            replacement: path.resolve(__dirname, './src/configs'),
         },
         {
            find: '@layouts',
            replacement: path.resolve(__dirname, './src/layouts'),
         },
         { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
         { find: '@stores', replacement: path.resolve(__dirname, './src/stores') },
         { find: '@', replacement: path.resolve(__dirname, './src') },
      ],
   },
   plugins: [react()],
});
