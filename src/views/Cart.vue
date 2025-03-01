<template>
  <div class="cart">
    <van-nav-bar title="购物车" />

    <div v-if="cartItems.length > 0" class="cart-list">
      <van-checkbox-group v-model="checkedItems">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <van-swipe-cell>
            <van-card :price="item.price" :title="item.title" :thumb="item.thumb" :desc="item.desc">
              <template #tags>
                <van-checkbox :name="item.id">选择</van-checkbox>
              </template>
              <template #footer>
                <van-stepper v-model="item.quantity" :min="1" />
              </template>
            </van-card>
            <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template>
          </van-swipe-cell>
        </div>
      </van-checkbox-group>
    </div>

    <div v-else class="empty-cart">
      <van-empty description="购物车是空的" />
      <van-button type="primary" block to="/">去购物</van-button>
    </div>

    <van-submit-bar
      v-if="cartItems.length > 0"
      :price="totalPrice"
      button-text="结算"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script setup>
/**
 * Cart.vue - 购物车页面组件
 *
 * 功能：
 * 1. 展示购物车商品列表，支持商品的选择和取消
 * 2. 提供商品数量调整功能
 * 3. 支持商品删除操作（左滑显示删除按钮）
 * 4. 自动计算选中商品的总价
 * 5. 支持全选/取消全选功能
 * 6. 空购物车状态显示
 */

import { ref, computed } from 'vue'
import {
  NavBar, // 导航栏组件
  Card, // 商品卡片组件
  Button,
  SwipeCell,
  Checkbox,
  CheckboxGroup,
  Stepper,
  SubmitBar,
  Empty
} from 'vant'

const cartItems = ref([
  {
    id: 1,
    title: 'iPhone 13 Pro',
    desc: 'A15仿生芯片，超视网膜XDR显示屏',
    price: 7999.0,
    quantity: 1,
    thumb: 'https://fastly.picsum.photos/id/1/200/200.jpg'
  },
  {
    id: 2,
    title: 'iPad Pro',
    desc: 'M1芯片，雷雳接口',
    price: 6799.0,
    quantity: 1,
    thumb: 'https://fastly.picsum.photos/id/2/200/200.jpg'
  }
])

const checkedItems = ref([])
const checkAll = computed({
  get() {
    return cartItems.value.length === checkedItems.value.length
  },
  set(value) {
    checkedItems.value = value ? cartItems.value.map((item) => item.id) : []
  }
})

const totalPrice = computed(() => {
  return checkedItems.value.reduce((total, id) => {
    const item = cartItems.value.find((item) => item.id === id)
    return total + (item ? item.price * item.quantity * 100 : 0)
  }, 0)
})

const onSubmit = () => {
  if (checkedItems.value.length === 0) {
    return
  }
  // 处理结算逻辑
}
</script>

<style scoped>
.cart {
  min-height: 100vh;
  padding-bottom: 50px;
  background-color: #f7f8fa;
}

.cart-list {
  padding: 10px;
}

.cart-item {
  margin-bottom: 10px;
}

.delete-button {
  height: 100%;
}

.empty-cart {
  padding: 20px;
}

.van-submit-bar {
  bottom: 50px;
}

.van-checkbox {
  margin-left: 10px;
}
</style>
