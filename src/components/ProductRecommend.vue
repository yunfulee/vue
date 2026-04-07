<template>
  <div class="product-recommend">
    <van-tabs
      v-model:active="activeTab"
      animated
      swipeable
      sticky
      offset-top="64"
      @change="onTabChange"
    >
      <van-tab v-for="tab in tabs" :key="tab.id" :title="tab.title" :name="tab.id">
        <div class="products">
          <van-loading v-if="loading" vertical>加载中...</van-loading>
          <template v-else>
            <van-card
              v-for="product in currentProducts"
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
          </template>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getRecommendProducts } from '@/services/productService'
import type { Product } from '@/types'

const router = useRouter()
const activeTab = ref('hot')
const currentProducts = ref<Product[]>([])
const loading = ref(false)

// Tab数据
const tabs = ref([
  { id: 'hot', title: '今日特惠' },
  { id: 'clothing', title: '服装鞋靴' },
  { id: 'electronics', title: '电子家居' },
  { id: 'beauty', title: '美妆个护' }
])

const fetchProducts = async (tabId: string) => {
  loading.value = true
  try {
    currentProducts.value = await getRecommendProducts(tabId)
  } catch (error) {
    console.error('Failed to fetch products:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchProducts(activeTab.value)
})

const onTabChange = (name: string | number) => {
  fetchProducts(String(name))
}

// 处理查看更多点击事件
const handleViewMore = (tabId: string | number) => {
  router.push(`/category/${tabId}`)
}
</script>

<style lang="scss" scoped>
.product-recommend {
  margin-bottom: 24px;
}

.products {
  padding: 12px;
  min-height: 200px;
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
