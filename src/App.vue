<script setup>
/**
 * App.vue - 应用程序根组件
 * 实现整体布局和底部导航栏
 */

import { ref } from 'vue'

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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Montserrat:wght@400;700&display=swap');

/* 全局样式 */
#app {
  /* 设置全局字体族 */
  font-family: $font-family-sans;
  /* 字体渲染优化 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  background-color: $background-color;
}

/* 应用容器样式 */
.app {
  min-height: 100vh;
  background-color: $background-color;
}

/* 确保底部导航栏始终显示在最上层 */
.van-tabbar {
  z-index: 999;
}
</style>
