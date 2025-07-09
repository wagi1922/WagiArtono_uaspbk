<template>
  <nav class="bg-white shadow-md sticky top-0 z-10">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 class="text-xl font-bold">
        <router-link to="/">🛍️ MyShop</router-link>
      </h1>
      <ul class="flex space-x-6 items-center">
        <!-- Menggunakan <router-link> untuk navigasi SPA yang benar -->
        <li><router-link to="/" class="hover:text-blue-500 transition-colors">Home</router-link></li>
        <li><router-link to="/products" class="hover:text-blue-500 transition-colors">Products</router-link></li>
        <li><router-link to="/contact" class="hover:text-blue-500 transition-colors">Contact</router-link></li>
        
        <!-- 
          BAGIAN BARU: TAMPILAN KERANJANG BELANJA
          - Kita link ke halaman /cart (yang bisa Anda buat nanti)
          - Menampilkan getter 'totalItemCount' dari cartStore.
          - Ini akan otomatis update setiap kali item ditambahkan!
        -->
        <li>
          <router-link to="/cart" class="relative flex items-center hover:text-blue-500 transition-colors">
            🛒
            <span v-if="cartStore.totalItemCount > 0" class="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {{ cartStore.totalItemCount }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// 1. Impor store keranjang belanja
import { useCartStore } from '../stores/cartStore';

// 2. Inisialisasi store agar bisa digunakan di template
const cartStore = useCartStore();
</script>

<style scoped>
/* Menambahkan styling untuk link yang aktif agar lebih jelas */
.router-link-exact-active {
  color: #3b82f6; /* Warna biru */
  font-weight: 600;
}
</style>
