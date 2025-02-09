import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ✅ Vite가 빌드 결과를 dist 폴더에 저장
  },
  server: {
    port: 5173, // ✅ 로컬 개발 시 기본 포트 설정
  }
});
