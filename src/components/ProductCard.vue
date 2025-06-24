<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-4 text-center">Produk Unggulan</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.id" class="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <img :src="product.image" class="w-full h-40 object-cover mb-2 rounded" />
        <h3 class="font-bold text-lg">{{ product.name }}</h3>
        <p class="text-gray-600">{{ product.price }}</p>
        <button class="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Beli</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import gambar lokal
import imgA from '../assets/image/Victus.jpg'
import imgB from '../assets/image/Nitro.jpg'
import imgC from '../assets/image/ZenBook-Pro-14-Duo.jpg'

const products = [
  { id: 1, name: 'Produk A', price: 'Rp 11.250.000', image: imgA },
  { id: 2, name: 'Produk B', price: 'Rp 25.000.000', image: imgB },
  { id: 3, name: 'Produk C', price: 'Rp 30.000.000', image: imgC },
]
</script>
