import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//import vitePluginImport from 'vite-plugin-babel-import' //按需引入element-ui
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'  // 不加这个配置，ElMessage出不来


// https://vitejs.dev/config/
export default ({mode}) => defineConfig({
  plugins: [
    vue(),
    // vitePluginImport([
    //   {
    //     libraryName: 'element-plus',
    //     libraryDirectory: 'es',
    //     style(name){
    //       return 'element-plus/theme-chalk/${name}.css'
    //     }
    //   }
    // ]),
    AutoImport({
      resolvers: [ElementPlusResolver({
      importStyle: 'sass'
      })],
    }),
    Components({
      resolvers: [ElementPlusResolver({
      importStyle: 'sass'
      })],
    }),
    ElementPlus({useSource: true})
  ],
  resolve:{
    alias:{
      '~':path.resolve(__dirname,'./'),
      '@':path.resolve(__dirname,'src')
    },
    extensions: ['.vue', '.js', '.jsx', '.json']
  },
  base: './',
  server:{
    proxy:{
      '/api':{
        target: 'http://backend-api-02.newbee.ltd/manage-api/v1',  // 凡是遇到 /api 路径的请求，都映射到 target 属性
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')  // 重写 api 为 空，就是去掉它

      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      }
    }
  }
})

