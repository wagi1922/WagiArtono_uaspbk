<template>
  <div class="max-w-4xl mx-auto p-4 md:p-8">
    
    <div v-if="loading" class="text-center py-20">
      <p class="text-gray-500 text-xl">Memuat detail produk...</p>
    </div>

    <div v-else-if="error" class="text-center py-20 bg-red-50 p-8 rounded-lg">
      <h2 class="text-2xl text-red-700 font-bold mb-2">Oops! Produk Tidak Ditemukan</h2>
      <p class="text-red-600">Kami tidak dapat menemukan produk yang Anda cari.</p>
      <router-link to="/" class="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Kembali ke Home</router-link>
    </div>


    <div v-else-if="product" class="grid md:grid-cols-2 gap-8 items-start">
      
      <div>
        <img :src="product.image" :alt="product.name" class="w-full h-auto object-cover rounded-lg shadow-lg">
      </div>

      
      <div class="flex flex-col h-full">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ product.name }}</h1>
        <p class="text-2xl text-blue-600 font-semibold mb-4">{{ product.price }}</p>
        <p class="text-gray-700 leading-relaxed">{{ product.description }}</p>

        <div v-if="product.specifications && product.specifications.length" class="mt-6 border-t pt-4">
          <h3 class="text-lg font-semibold mb-3 text-gray-800">Spesifikasi Teknis</h3>
          <ul class="space-y-2">
            <li v-for="spec in product.specifications" :key="spec.name" class="flex justify-between text-sm bg-gray-50 p-2 rounded">
              <span class="font-medium text-gray-600">{{ spec.name }}</span>
              <span class="text-gray-900 text-right font-mono">{{ spec.value }}</span>
            </li>
          </ul>
        </div>
        
        <div class="mt-auto pt-6">
          <button 
            @click="cartStore.addProductToCart(product)"
            class="w-full bg-green-500 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105">
            🛒 Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/cartStore'
import { useProductStore } from '../stores/productStore'
// 1. Impor instance api
import api from '../api/axios'

const route = useRoute()
const cartStore = useCartStore()
const productStore = useProductStore()

const product = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  const productId = parseInt(route.params.id, 10)
  let foundProduct = productStore.products.find(p => p.id === productId)

  if (foundProduct) {
    product.value = foundProduct
    loading.value = false
  } else {
    try {
      // 2. Ganti fetch dengan api.get()
      const response = await api.get(`/products/${productId}`)
      // 3. Gunakan response.data
      product.value = response.data
    } catch (e) {
      console.error(e)
      error.value = e
    } finally {
      loading.value = false
    }
  }
})
</script>
