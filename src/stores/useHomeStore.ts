import { defineStore } from 'pinia'
import { getBanners, getCategories } from '@/services/homeService'
import type { Banner, Category } from '@/types'

interface HomeState {
  banners: Banner[];
  categories: Category[];
  loading: boolean;
}

export const useHomeStore = defineStore('home', {
  state: (): HomeState => ({
    banners: [],
    categories: [],
    loading: false
  }),
  actions: {
    async fetchHomeData() {
      this.loading = true
      try {
        const [banners, categories] = await Promise.all([
          getBanners(),
          getCategories()
        ])
        this.banners = banners
        this.categories = categories
      } catch (error) {
        console.error('Failed to fetch home data:', error)
      } finally {
        this.loading = false
      }
    }
  }
})
