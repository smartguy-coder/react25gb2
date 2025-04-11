import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["a0a9-188-130-177-189.ngrok-free.app"], // Дозволяє всі ngrok-free домени
  },
});
