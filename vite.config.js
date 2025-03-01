import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslint from 'vite-plugin-eslint'

// Vite 配置文件
export default defineConfig({
  // 开发或生产环境服务的公共基础路径
  base: '/',
  // 插件配置
  plugins: [
    vue(),
    eslint({
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.js'],
      lintOnStart: false,
      emitWarning: true,
      failOnWarning: false,
      failOnError: false
    })
  ],
  // 解析配置
  resolve: {
    alias: {
      // 设置路径别名，@ 指向 src 目录
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 开发服务器配置
  server: {
    // 监听所有地址，包括局域网和公网地址
    host: '0.0.0.0',
    // 服务端口号
    port: 3000,
    // 服务启动时自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 代理配置
    proxy: {
      '/api': {
        // 代理目标地址
        target: 'http://localhost:8080',
        // 允许跨域
        changeOrigin: true,
        // 路径重写
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 构建配置
  build: {
    // 浏览器兼容目标
    target: 'es2015',
    // 输出路径
    outDir: 'dist',
    // 静态资源存放路径
    assetsDir: 'assets',
    // 压缩方式
    minify: 'terser',
    // terser 压缩配置
    // CSS代码分割
    cssCodeSplit: true,
    // 启用 CSS 压缩
    cssMinify: true,
    terserOptions: {
      compress: {
        // 生产环境移除 console
        drop_console: true,
        // 生产环境移除 debugger
        drop_debugger: true
      }
    },
    // rollup 打包配置
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 vue 相关库打包成单独的 chunk 中
          vendor: ['vue', 'vue-router', 'vuex']
        }
      }
    },
    // 启用 gzip 压缩
    brotliSize: true
  },
  // CSS 相关配置
  css: {
    preprocessorOptions: {
      scss: {
        // 全局引入 scss 变量文件
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
})
