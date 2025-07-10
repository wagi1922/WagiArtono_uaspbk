import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  getters: {
    productCount: (state) => state.products.length,
  },
  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('http://localhost:3000/products')
        if (!response.ok) {
          throw new Error('Gagal mengambil data produk')
        }
        this.products = await response.json()
      } catch (e) {
        this.error = e
        console.error("Gagal mengambil data produk:", e)
      } finally {
        this.loading = false
      }
    },
  },
})
