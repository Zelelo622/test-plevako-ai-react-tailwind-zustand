import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), "");

  console.log("ENV:", env);

  return defineConfig({
    plugins: [react(), tailwindcss(), tsconfigPaths(), svgr()],
    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: env.API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
