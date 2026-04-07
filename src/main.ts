/**
 * main.ts - 项目入口文件
 * 负责应用程序的初始化、全局组件注册和路由配置
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Lazyload } from 'vant'

// 创建Vue应用实例
const app = createApp(App)

// 注册 Pinia 状态管理
app.use(createPinia())

// 注册 Vant 懒加载指令
app.use(Lazyload)

// 注册路由插件
app.use(router)

// 挂载应用到#app节点
app.mount('#app')
