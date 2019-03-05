import terser from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";

const config = {
  input: "src/InfiniteList.jsx",
  external: ["react"],
  output: {
    format: "umd",
    name: "react-infinite-list",
    globals: {
      react: "React"
    }
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    terser.terser()
  ]
};
export default config;
