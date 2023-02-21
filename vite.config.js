import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default (({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [react()],
    server: {
      port: parseInt(process.env.VITE_PORT),
    },
    preview: {
      port: 4270,
    },
    define: {
      'process.env': process.env,
    },
    build: {
      incremental: true,
      babel: {
        presets: [ "@babel/present-env", "@babel/preset-react"],
      },
      cache: true,
      minify: true,
      mode: "production",
      chunks: true,
      moduleBundling: true,
      debug: true,
    }
  })
})
