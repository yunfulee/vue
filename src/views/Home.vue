<template>
  <div class="home">
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" />

    <van-swipe class="banner" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
        <img :src="image" class="banner-img" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="5">
      <van-grid-item
        v-for="(item, index) in categories"
        :key="index"
        :icon="item.icon"
        :text="item.text"
      />
    </van-grid>

    <van-divider>热门商品</van-divider>

    <div class="products">
      <van-card
        v-for="product in products"
        :key="product.id"
        :price="product.price"
        :title="product.title"
        :thumb="product.thumb"
        :tag="product.tag"
        :desc="product.desc"
      >
        <template #footer>
          <van-button size="mini">加入购物车</van-button>
          <van-button size="mini" type="primary">立即购买</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script setup>
/**
 * Home.vue - 首页组件
 *
 * 功能：
 * 1. 展示商城首页内容，包括搜索框、轮播图、分类导航和商品列表
 * 2. 提供商品搜索功能
 * 3. 展示促销活动和热门商品
 * 4. 支持快速分类导航
 * 5. 商品可以直接加入购物车或立即购买
 */

import { ref } from 'vue'
import {
  Search, // 搜索框组件
  Swipe, // 轮播容器组件
  SwipeItem, // 轮播项组件
  Grid, // 宫格容器组件
  GridItem, // 宫格项组件
  Card, // 商品卡片组件
  Button, // 按钮组件
  Divider // 分割线组件
} from 'vant'

// 搜索关键词
const searchValue = ref('')

const banners = ref([
  'https://img01.yzcdn.cn/vant/apple-1.jpg',
  'https://img01.yzcdn.cn/vant/apple-2.jpg',
  'https://img01.yzcdn.cn/vant/apple-3.jpg'
])

const categories = ref([
  { text: '手机', icon: 'phone-o' },
  { text: '电脑', icon: 'desktop-o' },
  { text: '服饰', icon: 'gift-o' },
  { text: '食品', icon: 'shop-o' },
  { text: '更多', icon: 'apps-o' }
])

const products = ref([
  {
    id: 1,
    title: 'iPhone 13 Pro',
    desc: 'A15仿生芯片，超视网膜XDR显示屏',
    price: '7999.00',
    tag: '新品',
    thumb: 'https://img01.yzcdn.cn/vant/iphone-14.jpg'
  },
  {
    id: 2,
    title: 'MacBook Pro',
    desc: 'M1芯片，超长续航',
    price: '11999.00',
    tag: '热销',
    thumb: 'https://img01.yzcdn.cn/vant/macbook-pro.jpg'
  }
])
</script>

<style scoped>
.home {
  padding-bottom: 50px;
}

.banner {
  height: 200px;
  margin-bottom: 10px;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.products {
  padding: 10px;
}

.van-card {
  margin-bottom: 10px;
}

.van-button {
  margin-right: 5px;
}
</style>
