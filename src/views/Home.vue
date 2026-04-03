<template>
  <van-pull-refresh
    v-model="refreshing"
    :head-height="80"
    :pull-distance="100"
    @refresh="onRefresh"
  >
    <div class="home">
      <!-- 顶部搜索栏 -->
      <div class="search-bar">
        <div class="logo">亚马逊海外购</div>
        <van-search v-model="searchValue" placeholder="搜索" shape="round" />
      </div>

      <!-- 轮播广告 -->
      <van-swipe class="banner" :autoplay="3000" indicator-color="#ff6b81" lazy-render>
        <van-swipe-item v-for="(banner, index) in banners" :key="index">
          <img v-lazy="banner.image" :alt="banner.title" class="banner-img" />
        </van-swipe-item>
      </van-swipe>

      <!-- 分类导航 -->
      <van-grid :column-num="5" :border="false" class="category-grid">
        <van-grid-item
          v-for="(category, index) in categories"
          :key="index"
          :icon="category.icon"
          :text="category.text"
        />
      </van-grid>

      <!-- 优惠券提示 -->
      <div class="coupon-bar">
        <van-icon name="coupon-o" />
        <span>超值好券来袭!</span>
        <van-icon name="arrow" />
      </div>

      <!-- 促销活动区 -->
      <div class="promo-container">
        <div class="promo-left">
          <div class="promo-card">
            <div class="promo-content">
              <h4>女人节惊喜满</h4>
              <p>领合计最高330元补贴</p>
            </div>
            <img
              v-lazy="'https://img01.yzcdn.cn/vant/cat.jpeg'"
              alt="女人节活动"
              class="promo-image"
            />
          </div>
        </div>

        <div class="promo-right">
          <div class="promo-card small">
            <div class="promo-content">
              <h4>扭蛋三天乐</h4>
              <p>中奖直降200元</p>
            </div>
          </div>
          <div class="promo-card small">
            <div class="promo-content">
              <h4>小红书分享</h4>
              <p>得大额券</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 品牌展示 -->
      <div class="brand-container">
        <van-grid :column-num="5" :border="true">
          <van-grid-item v-for="(brand, index) in brands" :key="index">
            <img v-lazy="brand.logo" :alt="brand.name" class="brand-logo" />
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 商品推荐 -->
      <product-recommend />

      <!-- 品牌展示区 -->
      <div class="brand-showcase">
        <div class="brand-row">
          <div class="brand-header">
            <img v-lazy="'https://img01.yzcdn.cn/vant/cat.jpeg'" alt="Clarks" />
            <img v-lazy="'https://img01.yzcdn.cn/vant/cat.jpeg'" alt="Camper" />
            <img v-lazy="'https://img01.yzcdn.cn/vant/cat.jpeg'" alt="Hugo Boss" />
          </div>
          <div class="brand-title">潮流运动鞋 轻享春日</div>
        </div>
        <div class="brand-grid">
          <van-grid :column-num="4" :border="false" :gutter="10">
            <van-grid-item v-for="brand in popularBrands" :key="brand.id">
              <img v-lazy="brand.logo" :alt="brand.name" class="brand-logo" />
            </van-grid-item>
          </van-grid>
        </div>
      </div>

      <!-- 海淘热卖榜 -->
      <div class="hot-sales">
        <div class="section-title">海淘热卖必买榜</div>
        <div class="section-subtitle">满300元享国际免邮</div>
        <div class="hot-sales-grid">
          <van-card
            v-for="item in hotSaleProducts"
            :key="item.id"
            :price="item.price"
            :title="item.title"
            :thumb="item.thumb"
            :desc="item.desc"
            :tag="item.tag"
          />
        </div>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script setup>
import { ref } from 'vue'
import ProductRecommend from '@/components/ProductRecommend.vue'
// 搜索关键词
const searchValue = ref('')

// 轮播图数据
const banners = ref([
  {
    id: 1,
    image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    title: '发小红书必得大额券'
  },
  {
    id: 2,
    image: 'https://img01.yzcdn.cn/vant/apple-2.jpg',
    title: '女人节活动'
  },
  {
    id: 3,
    image: 'https://img01.yzcdn.cn/vant/apple-3.jpg',
    title: '春季新品'
  }
])

// 分类导航数据
const categories = ref([
  { text: '今日特惠', icon: 'fire-o' },
  { text: '畅销热卖', icon: 'hot-o' },
  { text: '潮流服饰', icon: 'shop-o' },
  { text: '时尚鞋靴', icon: 'gift-o' },
  { text: '运动户外', icon: 'bicycle' },
  { text: '美容护肤', icon: 'smile-o' },
  { text: '营养保健', icon: 'like-o' },
  { text: '电子数码', icon: 'phone-o' },
  { text: '进口家居', icon: 'home-o' },
  { text: '母婴玩具', icon: 'baby-o' }
])

// 品牌数据
const brands = ref([
  { id: 1, name: 'BOSS', logo: 'https://img01.yzcdn.cn/vant/logo.png' },
  { id: 2, name: 'ECCO', logo: 'https://img01.yzcdn.cn/vant/logo.png' },
  { id: 3, name: 'Salomon', logo: 'https://img01.yzcdn.cn/vant/logo.png' },
  { id: 4, name: 'HH', logo: 'https://img01.yzcdn.cn/vant/logo.png' },
  { id: 5, name: 'Marmot', logo: 'https://img01.yzcdn.cn/vant/logo.png' },
  { id: 6, name: 'Cetaphil', logo: 'https://img01.yzcdn.cn/vant/logo.png' },
  { id: 7, name: "Silk'n", logo: 'https://img01.yzcdn.cn/vant/logo.png' },
  { id: 8, name: 'Enfamil', logo: 'https://img01.yzcdn.cn/vant/logo.png' },
  { id: 9, name: 'Fissler', logo: 'https://img01.yzcdn.cn/vant/logo.png' },
  { id: 10, name: 'Hansgrohe', logo: 'https://img01.yzcdn.cn/vant/logo.png' }
])

// 添加热卖商品数据
const hotSaleProducts = ref([
  {
    id: 'hs1',
    title: 'Nestlé BEBA奶粉 SUPREME',
    desc: '德国版本 2段',
    price: '199.00',
    tag: '热销',
    thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
  },
  {
    id: 'hs2',
    title: 'TAUTROPFEN 天然护肤精华液',
    desc: '德国进口 滋润保湿',
    price: '299.00',
    tag: '新品',
    thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
  },
  {
    id: 'hs3',
    title: 'Aptamil 爱他美奶粉',
    desc: '德国原装进口',
    price: '258.00',
    tag: '推荐',
    thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
  },
  {
    id: 'hs4',
    title: 'La Roche-Posay 理肤泉喷雾',
    desc: '舒缓修护',
    price: '128.00',
    tag: '畅销',
    thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
  }
])

// 添加下拉刷新相关的数据和方法
// 修改下拉刷新相关的实现
const refreshing = ref(false)

const onRefresh = () => {
  refreshing.value = true
  // 模拟数据刷新
  setTimeout(async () => {
    try {
      // 更新轮播图数据
      banners.value = [
        ...banners.value,
        {
          id: 4,
          image: 'https://img01.yzcdn.cn/vant/apple-4.jpg',
          title: '限时特惠'
        }
      ]

      // 更新热卖商品数据
      hotSaleProducts.value = [
        ...hotSaleProducts.value,
        {
          id: 'hs5',
          title: 'Dyson 吹风机',
          desc: '新款上市',
          price: '2999.00',
          tag: '新品',
          thumb: 'https://img01.yzcdn.cn/vant/cat.jpeg'
        }
      ]

      showToast({
        type: 'success',
        message: '刷新成功',
        position: 'top'
      })
    } catch (error) {
      showToast({
        type: 'fail',
        message: '刷新失败',
        position: 'top'
      })
    } finally {
      refreshing.value = false
    }
  }, 1000)
}
</script>

<style scoped>
:deep(.van-pull-refresh) {
  min-height: 100vh;
  background-color: #f7f8fa;
  overflow: visible;
}

:deep(.van-pull-refresh__track) {
  position: relative;
}

:deep(.van-pull-refresh__head) {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff6b81;
  color: white;
  font-size: 14px;
  transition: all 0.3s;
}

.home {
  transition: transform 0.3s;
  transform-origin: top;
  will-change: transform;
}

.home {
  padding-bottom: 50px;
  background-color: #f7f8fa;
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #ff6b81;
}

.logo {
  color: white;
  font-weight: bold;
  margin-right: 10px;
  font-size: 14px;
}

.banner {
  height: 180px;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-grid {
  margin: 10px 0;
  background-color: white;
}

.coupon-bar {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #fff5f5;
  color: #ff6b81;
  margin: 0 10px;
  border-radius: 4px;
}

.promo-container {
  display: flex;
  padding: 10px;
  gap: 10px;
}

.promo-left {
  flex: 2;
}

.promo-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.promo-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  height: 100%;
}

.promo-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-left: 12px;
  flex-shrink: 0;
}

.promo-content {
  flex: 1;
  min-width: 0; /* 防止文字溢出 */
}

.promo-left .promo-card {
  background-color: #ff6b81;
  color: white;
}

.promo-content h4 {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
}

.promo-content p {
  margin: 5px 0 0;
  font-size: 12px;
}

.brand-container {
  margin: 10px 0;
}

.brand-logo {
  width: 80%;
  height: auto;
}

.product-recommend {
  margin-bottom: 50px;
}

.products {
  padding: 10px;
}

.van-card {
  margin-bottom: 10px;
  background-color: white;
}

:deep(.van-tabs__wrap) {
  background-color: white;
}

:deep(.van-tab--active) {
  color: #ff6b81;
  font-weight: bold;
}

:deep(.van-tabs__line) {
  background-color: #ff6b81;
}

.brand-showcase {
  margin: 16px;
  background: white;
  border-radius: 8px;
  padding: 16px;
}

.brand-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.brand-header img {
  width: 30%;
  height: 40px;
  object-fit: contain;
}

.brand-title {
  font-size: 14px;
  color: #333;
  text-align: center;
  margin-bottom: 16px;
}

.brand-grid {
  margin-top: 16px;
}

.brand-logo {
  width: 100%;
  height: 40px;
  object-fit: contain;
}

:deep(.van-grid-item__content) {
  padding: 8px;
  background-color: #f8f8f8;
  border-radius: 4px;
}
</style>
