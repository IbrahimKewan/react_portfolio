import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
        viteCompression({
            algorithm: "gzip",
            ext: ".gz",
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],
                    lottie: ["lottie-react", "lottie-web"],
                    animations: ["framer-motion"],
                },
            },
        },
        minify: "terser",
        sourcemap: false,
    },
});
