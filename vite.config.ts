import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath, URL} from 'node:url';
import svgr from 'vite-plugin-svgr';

import {compilerOptions} from './tsconfig.json';

function mountAliasPaths() {
  const paths = compilerOptions.paths as Record<string, string[]>;

  const aliases: Record<string, string> = {};

  Object.keys(paths).forEach(alias => {
    const aliasArray = paths[alias].map(aliasPath =>
      fileURLToPath(new URL(aliasPath.replace('/*', ''), import.meta.url)),
    );

    aliases[alias.replace('/*', '')] = aliasArray[0];
  });

  return aliases;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: mountAliasPaths(),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/includes/index.scss" as *;`,
      },
    },
  },
});
