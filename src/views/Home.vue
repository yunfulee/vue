<template>
  <van-pull-refresh
    v-model="refreshing"
    :head-height="80"
    :pull-distance="100"
    @refresh="onRefresh"
  >
    <div class="home">
      <!-- 顶部搜索栏 - Soft UI Style -->
      <div class="search-bar">
        <div class="logo">亚马逊海外购</div>
        <van-search
          v-model="searchValue"
          placeholder="搜索全球好物"
          shape="round"
          background="transparent"
        />
      </div>

      <!-- 轮播广告 - Hero-Centric -->
      <van-swipe class="banner" :autoplay="3000" indicator-color="#D4AF37" lazy-render>
        <van-swipe-item v-for="(banner, index) in banners" :key="index">
          <div class="banner-item">
            <img v-lazy="banner.image" :alt="banner.title" class="banner-img" />
            <div class="banner-content">
              <h3>{{ banner.title }}</h3>
              <p>限时尊享优惠</p>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>

      <!-- Social Proof Section -->
      <div class="social-proof">
        <van-icon name="passed" color="#A8D5BA" />
        <span>100% 正品保障</span>
        <van-icon name="logistics" color="#A8D5BA" />
        <span>全球直邮免邮</span>
        <van-icon name="service-o" color="#A8D5BA" />
        <span>24/7 专业客服</span>
      </div>

      <!-- 分类导航 - Organic Shapes -->
      <van-grid :column-num="5" :border="false" class="category-grid">
        <van-grid-item
          v-for="(category, index) in categories"
          :key="index"
          :icon="category.icon"
          :text="category.text"
        />
      </van-grid>

      <!-- 优惠券提示 - Soft UI -->
      <div class="coupon-bar">
        <van-icon name="coupon-o" />
        <span>尊享会员礼包，最高立减 330 元</span>
        <van-icon name="arrow" />
      </div>

      <!-- 促销活动区 - Modern Layout -->
      <div class="promo-container">
        <div class="promo-left">
          <div class="promo-card primary">
            <div class="promo-content">
              <h4>春日焕新季</h4>
              <p>精选大牌 3 折起</p>
              <van-button size="mini" round plain color="#fff">立即进入</van-button>
            </div>
            <img v-lazy="'https://img01.yzcdn.cn/vant/cat.jpeg'" alt="活动" class="promo-image" />
          </div>
        </div>

        <div class="promo-right">
          <div class="promo-card secondary">
            <div class="promo-content">
              <h4>扭蛋赢好礼</h4>
              <p>100% 中奖</p>
            </div>
          </div>
          <div class="promo-card tertiary">
            <div class="promo-content">
              <h4>分享领券</h4>
              <p>多邀多得</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 品牌展示 - Grid Layout -->
      <div class="section-header">
        <span class="title">大牌入驻</span>
        <span class="more">查看全部 ></span>
      </div>
      <div class="brand-container">
        <van-grid :column-num="5" :border="false">
          <van-grid-item v-for="(brand, index) in brands" :key="index">
            <div class="brand-item">
              <img v-lazy="brand.logo" :alt="brand.name" class="brand-logo" />
            </div>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 商品推荐 - Card Style -->
      <div class="section-header">
        <span class="title">为您推荐</span>
      </div>
      <product-recommend />

      <!-- 海淘热卖榜 - Detailed Cards -->
      <div class="hot-sales">
        <div class="section-title">海淘热卖必买榜</div>
        <div class="section-subtitle">满 300 元享国际免邮</div>
        <div class="hot-sales-grid">
          <van-card
            v-for="item in hotSaleProducts"
            :key="item.id"
            :price="item.price"
            :title="item.title"
            :thumb="item.thumb"
            :desc="item.desc"
            :tag="item.tag"
            currency="¥"
            class="product-card"
          >
            <template #footer>
              <van-button size="mini" round icon="cart-o"></van-button>
            </template>
          </van-card>
        </div>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'
import ProductRecommend from '@/components/ProductRecommend.vue'

// 搜索关键词
const searchValue = ref('')

// 轮播图数据
const banners = ref([
  {
    id: 1,
    image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    title: '春季大促，全球好物低至 3 折'
  },
  {
    id: 2,
    image: 'https://img01.yzcdn.cn/vant/apple-2.jpg',
    title: '三八女王节，尽显女性风采'
  },
  {
    id: 3,
    image: 'https://img01.yzcdn.cn/vant/apple-3.jpg',
    title: '品质生活，从这里开始'
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

// 热门品牌数据
const popularBrands = ref([
  { id: 1, name: 'Clarks', logo: 'https://img01.yzcdn.cn/vant/cat.jpeg' },
  { id: 2, name: 'Camper', logo: 'https://img01.yzcdn.cn/vant/cat.jpeg' },
  { id: 3, name: 'BOSS', logo: 'https://img01.yzcdn.cn/vant/cat.jpeg' },
  { id: 4, name: 'ECCO', logo: 'https://img01.yzcdn.cn/vant/cat.jpeg' }
])

// 热卖商品数据
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

const refreshing = ref(false)

const onRefresh = () => {
  refreshing.value = true
  setTimeout(async () => {
    try {
      banners.value = [
        ...banners.value,
        { id: Date.now(), image: 'https://img01.yzcdn.cn/vant/apple-4.jpg', title: '会员尊享日' }
      ]
      showToast({ type: 'success', message: '内容已更新' })
    } catch (error) {
      showToast({ type: 'fail', message: '网络异常' })
    } finally {
      refreshing.value = false
    }
  }, 1000)
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 60px;
  background-color: $background-color;
  min-height: 100vh;
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: $primary-color;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: $soft-shadow;

  .logo {
    color: white;
    font-family: $font-family-serif;
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
    white-space: nowrap;
  }

  :deep(.van-search) {
    flex: 1;
    padding: 0;
    .van-search__content {
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      .van-field__control {
        color: white;
        &::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      }
      .van-icon {
        color: white;
      }
    }
  }
}

.banner {
  height: 220px;
  margin: 12px;
  border-radius: $border-radius-organic;
  overflow: hidden;
  box-shadow: $soft-shadow;

  .banner-item {
    position: relative;
    width: 100%;
    height: 100%;

    .banner-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .banner-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
      color: white;

      h3 {
        margin: 0;
        font-size: 18px;
        font-family: $font-family-serif;
      }
      p {
        margin: 4px 0 0;
        font-size: 12px;
        opacity: 0.8;
      }
    }
  }
}

.social-proof {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px;
  background-color: white;
  margin: 0 12px 12px;
  border-radius: 12px;
  font-size: 11px;
  color: #666;
  box-shadow: $soft-shadow;

  span {
    margin-left: 4px;
  }
}

.category-grid {
  margin: 0 12px 12px;
  background-color: white;
  border-radius: $border-radius-organic;
  overflow: hidden;
  box-shadow: $soft-shadow;

  :deep(.van-grid-item__content) {
    background: transparent;
    padding: 16px 8px;
    transition: $transition-smooth;
    &:active {
      background: rgba(0, 0, 0, 0.02);
    }
  }
}

.coupon-bar {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  background-color: #fff;
  color: $primary-color;
  margin: 0 12px 16px;
  border-radius: 16px;
  box-shadow: $soft-shadow;
  font-size: 13px;
  font-weight: 500;

  span {
    flex: 1;
    margin: 0 10px;
  }
}

.promo-container {
  display: flex;
  padding: 0 12px;
  gap: 12px;
  margin-bottom: 24px;

  .promo-card {
    background-color: white;
    border-radius: 20px;
    padding: 16px;
    box-shadow: $soft-shadow;
    transition: $transition-smooth;
    cursor: pointer;

    &:hover {
      box-shadow: $hover-shadow;
      transform: translateY(-2px);
    }

    &.primary {
      background: linear-gradient(135deg, $primary-color, #f3d1d4);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .promo-image {
        width: 100px;
        align-self: flex-end;
      }
    }

    &.secondary {
      background-color: #f8e9e9;
      color: $text-color;
    }
    &.tertiary {
      background-color: #e9f8ed;
      color: $text-color;
    }

    h4 {
      margin: 0;
      font-size: 16px;
    }
    p {
      margin: 4px 0 8px;
      font-size: 12px;
      opacity: 0.8;
    }
  }

  .promo-left {
    flex: 1.2;
  }
  .promo-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 20px 12px;

  .title {
    font-size: 18px;
    font-weight: 700;
    font-family: $font-family-serif;
    color: $text-color;
  }
  .more {
    font-size: 12px;
    color: #999;
  }
}

.brand-container {
  margin: 0 12px 24px;
  background: white;
  border-radius: $border-radius-organic;
  padding: 8px;
  box-shadow: $soft-shadow;

  .brand-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    .brand-logo {
      max-width: 80%;
      max-height: 80%;
      object-fit: contain;
      filter: grayscale(100%);
      opacity: 0.6;
      transition: $transition-smooth;
      &:hover {
        filter: grayscale(0);
        opacity: 1;
      }
    }
  }
}

.hot-sales {
  padding: 0 12px 24px;

  .section-title {
    font-size: 20px;
    font-weight: 700;
    font-family: $font-family-serif;
    text-align: center;
    margin-bottom: 4px;
  }
  .section-subtitle {
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-bottom: 16px;
  }

  .product-card {
    background-color: white;
    border-radius: 20px;
    margin-bottom: 12px;
    padding: 12px;
    box-shadow: $soft-shadow;
    transition: $transition-smooth;

    &:hover {
      box-shadow: $hover-shadow;
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
}
</style>
