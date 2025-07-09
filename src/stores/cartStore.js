import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    totalItemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice: (state) => {
      const total = state.items.reduce((total, item) => total + (item.numericPrice * item.quantity), 0);
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(total);
    },
  },

  actions: {
    addProductToCart(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        const numericPrice = parseInt(product.price.replace(/Rp|\./g, '').trim());
        this.items.push({ ...product, quantity: 1, numericPrice: numericPrice });
      }
    },

    // --- ACTIONS BARU DI SINI ---

    /**
     * Menghapus satu item sepenuhnya dari keranjang
     * @param {number} productId ID produk yang akan dihapus
     */
    removeItemFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId);
    },

    /**
     * Mengurangi kuantitas item. Jika kuantitas menjadi 0, item akan dihapus.
     * @param {number} productId ID produk yang kuantitasnya akan dikurangi
     */
    decreaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item) {
        // Jika kuantitas 1, hapus item dari keranjang
        this.removeItemFromCart(productId);
      }
    },
    
    /**
     * Menambah kuantitas item.
     * @param {number} productId ID produk yang kuantitasnya akan ditambah
     */
    increaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      }
    }
  },
})
