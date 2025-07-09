import { defineStore } from 'pinia'

// 'useProductStore' adalah nama hook-nya, sesuai konvensi.
// 'products' adalah ID unik dari store ini.
export const useProductStore = defineStore('products', {
  // state() adalah tempat data Anda berada. Mirip seperti data() di Options API.
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  // getters adalah computed property untuk store. Berguna untuk data turunan.
  getters: {
    // Contoh: getter untuk mendapatkan jumlah produk
    productCount: (state) => state.products.length,
  },

  // actions adalah tempat method/fungsi Anda. Mirip seperti methods.
  // Di sinilah kita akan meletakkan logika fetch API.
  actions: {
    async fetchProducts() {
      this.loading = true // 'this' merujuk ke state store
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
