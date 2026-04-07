import api from './api'
import type { Banner, Category } from '@/types'

export const getBanners = (): Promise<Banner[]> => {
  // 实际项目中应该是 api.get('/banners')
  // 目前先模拟返回
  return Promise.resolve([
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
}

export const getCategories = (): Promise<Category[]> => {
  return Promise.resolve([
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
}
