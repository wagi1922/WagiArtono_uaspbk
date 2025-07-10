<template>
  <nav class="bg-white shadow-md sticky top-0 z-10">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 class="text-xl font-bold">
        <router-link to="/">🛍️ MyShop</router-link>
      </h1>
      <ul class="flex space-x-6 items-center">
        <li><router-link to="/" class="hover:text-blue-500 transition-colors">Home</router-link></li>
        <li><router-link to="/products" class="hover:text-blue-500 transition-colors">Products</router-link></li>
        <li><router-link to="/contact" class="hover:text-blue-500 transition-colors">Contact</router-link></li>
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
import { useCartStore } from '../stores/cartStore';


const cartStore = useCartStore();
</script>

<style scoped>

.router-link-exact-active {
  color: #3b82f6; 
  font-weight: 600;
}
</style>
