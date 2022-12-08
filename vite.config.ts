import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, __dirname);
    return {
        plugins: [vue()],
        server: {
            port: 6688,
            open: false,
            cors: true,
            proxy: {
                "/aohe": {
                    target: env.VITE_APP_BASE_API_AOHE,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/aohe/, ''),
                },
                "/ppfm":{
                    target:env.VITE_APP_BASE_API,
                    changeOrigin:true,
                    rewrite:(path) => path.replace(/^\/ppfm/,'')
                }
            },
        },
        resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/styles/variables.scss"',
                },
            },
        },
    };
});
