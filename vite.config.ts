import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-query': ['@tanstack/react-query'],
            'vendor-motion': ['motion'],
            'vendor-icons': ['lucide-react'],
            'vendor-store': ['zustand'],
            'vendor-axios': ['axios'],
          },
        },
      },
      chunkSizeWarningLimit: 200,
      sourcemap: mode !== 'production',
      minify: 'esbuild',
      cssMinify: true,
      // Target last 2 major versions of Chrome, Firefox, Safari, Edge + iOS 15+
      target: ['es2020', 'chrome89', 'firefox89', 'safari15', 'edge89'],
    },
    server: {
      proxy: {
        '/api/v1': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
          timeout: 120_000,
          proxyTimeout: 120_000,
          cookieDomainRewrite: 'localhost',
          cookiePathRewrite: '/',
          headers: {
            'Connection': 'keep-alive',
          },
          configure: (proxy, _options) => {
            proxy.on('proxyReq', (proxyReq, req) => {
              if (req.headers.cookie) {
                proxyReq.setHeader('Cookie', req.headers.cookie);
              }
            });
          },
        },
      },
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    performance: {
      maxAssetSize: 250000,
      maxEntrypointSize: 350000,
      hints: mode === 'production' ? 'warning' : false,
    },
  };
});
