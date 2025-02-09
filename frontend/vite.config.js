import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ 상대 경로로 설정하여 Vercel에서 올바르게 로드되도록 함
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
  },
  publicDir: 'public',
});
