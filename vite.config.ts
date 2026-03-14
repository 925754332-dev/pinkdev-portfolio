import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 关键：让 Vite 使用 Vercel 提供的端口，或者默认的 5173
    port: Number(process.env.PORT) || 5173,
    strictPort: true, // 如果端口被占用就报错，而不是换一个，这样 Vercel 才能抓到它
  },
})
