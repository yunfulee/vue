<script setup>
/**
 * App.vue - 应用程序根组件
 * 实现整体布局和底部导航栏
 */

import { ref } from 'vue'
import { Tabbar, TabbarItem } from 'vant'

// 当前激活的标签页索引
const active = ref(0)
</script>

<template>
  <!-- 应用程序主容器 -->
  <div class="app">
    <!-- 路由视图容器，用于显示当前路由对应的组件 -->
    <router-view />

    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
/* 全局样式 */
#app {
  /* 设置全局字体族 */
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Helvetica Neue',
    Helvetica,
    Segoe UI,
    Arial,
    Roboto,
    'PingFang SC',
    'miui',
    'Hiragino Sans GB',
    'Microsoft Yahei',
    sans-serif;
  /* 字体渲染优化 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 应用容器样式 */
.app {
  min-height: 100vh;
  background-color: #f7f8fa;
}

/* 确保底部导航栏始终显示在最上层 */
.van-tabbar {
  z-index: 999;
}
</style>
