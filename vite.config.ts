import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // FIX: Cast process to any to avoid TS error about missing cwd() when Node types are incomplete.
  const env = loadEnv(mode, (process as any).cwd(), '')

  return {
    plugins: [react()],
    define: {
      // Define process.env.API_KEY globally so the SDK can find it.
      // This replaces the string 'process.env.API_KEY' with the actual value in the browser code.
      // We check for VITE_API_KEY first (best practice for Vite), then API_KEY.
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY)
    }
  }
})