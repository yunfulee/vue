import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useHomeStore } from './useHomeStore'
import * as homeService from '@/services/homeService'

describe('Home Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with empty data', () => {
    const store = useHomeStore()
    expect(store.banners).toEqual([])
    expect(store.categories).toEqual([])
    expect(store.loading).toBe(false)
  })

  it('fetches home data successfully', async () => {
    const mockBanners = [{ id: 1, image: 'img1', title: 'Banner 1' }]
    const mockCategories = [{ text: 'Cat 1', icon: 'icon1' }]

    vi.spyOn(homeService, 'getBanners').mockResolvedValue(mockBanners)
    vi.spyOn(homeService, 'getCategories').mockResolvedValue(mockCategories)

    const store = useHomeStore()
    await store.fetchHomeData()

    expect(store.banners).toEqual(mockBanners)
    expect(store.categories).toEqual(mockCategories)
    expect(store.loading).toBe(false)
  })
})
