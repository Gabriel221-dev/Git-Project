import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

// })

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const PORT = `${env.PORT ?? "8080"}`;
  console.log(env.PORT);
  return {
    plugins: [react()],
    server: {
      port: PORT,
    },
  };
});
