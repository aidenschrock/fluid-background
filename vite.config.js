import glsl from "vite-plugin-glsl";
export default {
  root: "src/",
  plugins: [glsl()],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },
};
