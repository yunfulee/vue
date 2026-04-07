import api from './api'
import type { Product } from '@/types'

export const getHotSaleProducts = (): Promise<Product[]> => {
  return Promise.resolve([
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
}

export const getRecommendProducts = (tabId: string): Promise<Product[]> => {
  // 模拟分页或分类获取
  const mockData: Record<string, Product[]> = {
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
      }
    ]
    // ... 其他分类
  }
  return Promise.resolve(mockData[tabId] || [])
}
