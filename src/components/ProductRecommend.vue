<template>
  <div class="product-recommend">
    <van-tabs v-model:active="activeTab" animated swipeable sticky offset-top="64">
      <van-tab v-for="tab in tabs" :key="tab.id" :title="tab.title">
        <div class="products">
          <van-card
            v-for="product in getProductsByTab(tab.id)"
            :key="product.id"
            :price="product.price"
            :title="product.title"
            :thumb="product.thumb"
            :tag="product.tag"
            :desc="product.desc"
            class="recommend-card"
          >
            <template #footer>
              <div class="card-footer">
                <van-button size="mini" round plain>加入购物车</van-button>
                <van-button size="mini" round type="primary">立即购买</van-button>
              </div>
            </template>
          </van-card>

          <!-- 查看更多按钮 -->
          <div class="view-more">
            <van-button block round plain hairline type="primary" @click="handleViewMore(tab.id)">
              浏览更多精品
            </van-button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeTab = ref(0)

// 处理查看更多点击事件
const handleViewMore = (tabId) => {
  router.push(`/category/${tabId}`)
}

// Tab数据
const tabs = ref([
  { id: 'hot', title: '今日特惠' },
  { id: 'clothing', title: '服装鞋靴' },
  { id: 'electronics', title: '电子家居' },
  { id: 'beauty', title: '美妆个护' }
])

// 商品数据
const products = ref({
  hot: [
    {
      id: 1,
      title: '3.8大口径镜头，耳机音箱，运动手表等精品促销',
      desc: '限时特惠',
      price: '480.52',
      tag: '限时',
      thumb: 'https://picsum.photos/200'
    },
    {
      id: 2,
      title: '三八女王价保健品特惠购好价',
      desc: '女王节特惠',
      price: '141.38',
      tag: '特惠',
      thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
    }
  ],
  clothing: [
    {
      id: 101,
      title: 'BOSS 男士衬衫',
      desc: '高品质面料，舒适透气',
      price: '599.00',
      tag: '新品',
      thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
    },
    {
      id: 102,
      title: 'ECCO 女士休闲鞋',
      desc: '轻盈舒适，百搭款式',
      price: '899.00',
      tag: '热销',
      thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
    }
  ],
  electronics: [
    {
      id: 201,
      title: '智能音箱家庭套装',
      desc: 'AI语音控制，高品质音质',
      price: '599.00',
      tag: '智能',
      thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
    },
    {
      id: 202,
      title: 'Fissler 多功能料理锅',
      desc: '德国品质，耐用持久',
      price: '1299.00',
      tag: '进口',
      thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
    }
  ],
  beauty: [
    {
      id: 301,
      title: 'Cetaphil 洁面乳',
      desc: '温和不刺激，适合敏感肌',
      price: '89.00',
      tag: '畅销',
      thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
    },
    {
      id: 302,
      title: "Silk'n 美容仪",
      desc: '专业级家用美容，紧致肌肤',
      price: '1680.00',
      tag: '高端',
      thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
    }
  ]
})

const getProductsByTab = (tabId) => {
  return products.value[tabId] || []
}
</script>

<style lang="scss" scoped>
.product-recommend {
  margin-bottom: 24px;
}

.products {
  padding: 12px;
}

.recommend-card {
  margin-bottom: 16px;
  background-color: white;
  border-radius: 20px;
  padding: 12px;
  box-shadow: $soft-shadow;
  transition: $transition-smooth;

  &:hover {
    box-shadow: $hover-shadow;
    transform: translateY(-2px);
  }

  :deep(.van-card__title) {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
  }

  :deep(.van-card__price) {
    color: $cta-color;
    font-weight: 700;
  }
}

.card-footer {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
}

:deep(.van-tabs__wrap) {
  background-color: transparent;
  padding: 0 12px;
}

:deep(.van-tabs__nav) {
  background-color: transparent;
}

:deep(.van-tab) {
  font-size: 14px;
  color: #999;
}

:deep(.van-tab--active) {
  color: $text-color;
  font-weight: 700;
  font-family: $font-family-serif;
}

:deep(.van-tabs__line) {
  background-color: $primary-color;
  width: 20px;
}

.view-more {
  padding: 16px 0;
  text-align: center;

  :deep(.van-button) {
    font-weight: 600;
    box-shadow: $soft-shadow;
  }
}
</style>
