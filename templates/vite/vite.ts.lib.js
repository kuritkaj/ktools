import {defineConfig} from 'vite';
import {buildPlugin} from 'vite-plugin-build';

export default defineConfig({
  plugins: [buildPlugin({
    fileBuild: {
      formats: [
        {format: "cjs", outDir: "cjs"},
        {format: "es", outDir: "es"}
      ],
      emitDeclaration: true
    }
  })],
  appType: "custom",
  esbuild: {
    target: "node18"
  }
});
