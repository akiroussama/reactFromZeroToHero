import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// fix port 3000
const port = 3000;
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		hmr: {
			host: "0.0.0.0",
			port: 3000,
		},
		watch: {
			usePolling: true,
		},
		host: true,
		port: port,
	},
});
