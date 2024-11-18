import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';
import injectCSS from 'vite-plugin-css-injected-by-js';

// Define paths for builds
const appBuild = {
    entry: './src/main.tsx',
    outDir: 'dist',
};

const embedBuild = {
    entry: './src/embed/index.tsx',
    outDir: 'dist/embed',
};

export default defineConfig(({ mode }) => {
    // Determine if we're building for the embed script
    const isEmbedBuild = mode === 'embed';

    return {
        plugins: [react(), ...(isEmbedBuild ? [injectCSS()] : [])],
        css: isEmbedBuild
            ? {
                  postcss: './postcss.config.js', // Use PostCSS for Tailwind
              }
            : undefined,
        build: {
            outDir: isEmbedBuild ? embedBuild.outDir : appBuild.outDir,
            lib: isEmbedBuild
                ? {
                      entry: embedBuild.entry,
                      name: 'EmbedCard',
                      fileName: 'script',
                      formats: ['umd'],
                  }
                : undefined,
            rollupOptions: isEmbedBuild
                ? {
                      external: ['react', 'react-dom'],
                      output: {
                          globals: {
                              react: 'React',
                              'react-dom': 'ReactDOM',
                          },
                      },
                      plugins: [
                          inject({
                              process: 'process/browser',
                          }),
                      ],
                  }
                : undefined,
        },
    };
});
