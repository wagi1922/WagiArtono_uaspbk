<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-4 text-center">Produk Unggulan</h2>
    
    <div v-if="productStore.loading" class="text-center text-gray-500">
      Memuat produk...
    </div>
    <div v-else-if="productStore.error" class="text-center text-red-500">
      Gagal memuat data: {{ productStore.error.message }}
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="product in productStore.products" :key="product.id" class="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col">
        <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover mb-2 rounded" />
        <h3 class="font-bold text-lg">{{ product.name }}</h3>
        <p class="text-gray-600 mb-4">{{ product.price }}</p>
        
        
        <div class="mt-auto flex space-x-2">
          <button 
            @click="cartStore.addProductToCart(product)" 
            class="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-sm">
            Beli
          </button>
          
          <router-link 
            :to="`/product/${product.id}`" 
            class="flex-1 text-center bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors text-sm">
            Detail
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/productStore'
import { useCartStore } from '../stores/cartStore'

const productStore = useProductStore()
const cartStore = useCartStore()

onMounted(() => {
  if (productStore.products.length === 0) {
    productStore.fetchProducts()
  }
})
</script>
