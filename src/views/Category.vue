<template>
  <div class="category">
    <van-nav-bar title="商品分类" />

    <div class="category-container">
      <van-tree-select
        height="100vh"
        :items="items"
        :active-id="activeId"
        :main-active-index="activeIndex"
        @click-item="onClickItem"
        @click-nav="onClickNav"
      />
    </div>

    <div v-if="selectedProducts.length > 0" class="products">
      <van-card
        v-for="product in selectedProducts"
        :key="product.id"
        :price="product.price"
        :title="product.title"
        :thumb="product.thumb"
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
 * Category.vue - 商品分类页面组件
 *
 * 功能：
 * 1. 展示商品分类树形结构，支持二级分类导航
 * 2. 根据选择的分类显示对应商品列表
 * 3. 商品支持加入购物车和立即购买操作
 * 4. 提供分类快速切换和商品浏览功能
 */

import { ref, computed } from 'vue'
import {
  TreeSelect, // 树形选择组件
  Card, // 商品卡片组件
  Button, // 按钮组件
  NavBar // 导航栏组件
} from 'vant'

// 当前选中的商品分类ID
const activeId = ref(1)
// 当前选中的一级分类索引
const activeIndex = ref(0)

const items = ref([
  {
    text: '手机数码',
    children: [
      { text: '手机', id: 1 },
      { text: '平板', id: 2 },
      { text: '笔记本', id: 3 }
    ]
  },
  {
    text: '服装服饰',
    children: [
      { text: '男装', id: 4 },
      { text: '女装', id: 5 },
      { text: '童装', id: 6 }
    ]
  },
  {
    text: '食品生鲜',
    children: [
      { text: '水果', id: 7 },
      { text: '零食', id: 8 },
      { text: '生鲜', id: 9 }
    ]
  }
])

const products = ref({
  1: [
    {
      id: 1,
      title: 'iPhone 13 Pro',
      desc: 'A15仿生芯片，超视网膜XDR显示屏',
      price: '7999.00',
      thumb: 'https://fastly.picsum.photos/id/1/200/200.jpg'
    }
  ],
  2: [
    {
      id: 2,
      title: 'iPad Pro',
      desc: 'M1芯片，雷雳接口',
      price: '6799.00',
      thumb: 'https://fastly.picsum.photos/id/2/200/200.jpg'
    }
  ]
})

const selectedProducts = computed(() => {
  return products.value[activeId.value] || []
})

const onClickItem = async (item) => {
  try {
    activeId.value = item.id
    // 这里可以添加商品数据加载逻辑
    // 示例：await loadProductsByCategory(item.id)
    if (!products.value[item.id]) {
      products.value[item.id] = [] // 如果该分类暂无商品，显示空数组
    }
  } catch (error) {
    console.error('加载商品失败：', error)
  }
}

const onClickNav = (index) => {
  activeIndex.value = index
}
</script>

<style scoped>
.category {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.category-container {
  flex: 1;
  overflow: hidden;
}

.products {
  padding: 10px;
  padding-bottom: 60px;
}

.van-card {
  margin-bottom: 10px;
}

.van-button {
  margin-right: 5px;
}
</style>
