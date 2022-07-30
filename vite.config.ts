import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  build: {
    chunkSizeWarningLimit: 2600,
    sourcemap: true,
  },
  plugins: [react()],
});
