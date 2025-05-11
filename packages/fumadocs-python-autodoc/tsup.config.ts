import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/components/page.tsx"],
    format: "esm",
    dts: true,
    splitting: false,
    clean: true,
    target: "es2022",
    external: ["react"],
});
