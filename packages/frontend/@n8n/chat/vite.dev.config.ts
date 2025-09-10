import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import icons from 'unplugin-icons/vite';

const srcPath = resolve(__dirname, 'src');
const packagesDir = resolve(__dirname, '..', '..', '..');

// Simple development config without the build complexities
export default defineConfig({
  plugins: [
    vue(),
    icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // Exclude storybook files
        exclude: ['**/.storybook/**'],
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: srcPath,
      },
      {
        find: '@n8n/chat',
        replacement: srcPath,
      },
      {
        find: /^@n8n\/chat(.+)$/,
        replacement: srcPath + '$1',
      },
      {
        find: /^@n8n\/design-system(.+)$/,
        replacement: resolve(packagesDir, 'frontend', '@n8n', 'design-system', 'src$1'),
      },
    ],
  },
  define: {
    'process.env.NODE_ENV': '"development"',
  },
  server: {
    port: 6006,
    host: true,
  },
});
