import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
/**
 * type {import('vite').UserConfig}
 */
const config: UserConfig = {
  build: {
    target: 'modules',
    lib: {
      formats: ['es', 'cjs', 'umd', 'iife'],
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'VueSvgPanZoom'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        exports: 'default',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    },
    manifest: false,
  },
  plugins: [
    vue()
  ],
}

export default config
