import { defineStore } from 'pinia'
// 1. Impor instance api kita, bukan axios secara langsung
import api from '../api/axios'

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
        // 2. Ganti fetch dengan panggilan api.get()
        const response = await api.get('/products') // Cukup endpoint-nya saja
        
        // 3. Data sekarang ada di response.data, tidak perlu .json()
        this.products = response.data
      } catch (e) {
        // 4. Axios otomatis melempar error, jadi blok catch ini akan menangkapnya
        this.error = e
        console.error("Gagal mengambil data produk:", e)
      } finally {
        this.loading = false
      }
    },
  },
})
