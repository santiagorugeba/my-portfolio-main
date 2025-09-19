import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    resolve: { alias: { '@': '/src' } },
    server: {
        proxy: {
            '/api/bible': {
                target: 'https://api.scripture.api.bible',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/bible/, ''),
                configure: (proxy, options) => {
                    proxy.on('proxyReq', (proxyReq, req, res) => {
                        proxyReq.setHeader('api-key', '961b0d0e4beb4e955c3c5aa0fda28639');
                    });
                }
            }
        }
    }
});
