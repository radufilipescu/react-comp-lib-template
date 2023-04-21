import type { Options } from "tsup";

const config: Options = {
  entry: [
    "src/components/index.tsx",
    "MyAwsomeComponent.css",
  ],
  outDir: "dist",
  dts: true,
  sourcemap: true,
  format: [/* "iife", */ "cjs", "esm"],
};

export default config;