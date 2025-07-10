<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-8">Keranjang Belanja Anda</h1>

      <div v-if="cartStore.items.length === 0" class="text-center bg-white p-12 rounded-lg shadow-md">
        <p class="text-xl text-gray-500 mb-4">Keranjang Anda masih kosong.</p>
        <router-link to="/" class="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600 transition-colors">
          Mulai Belanja
        </router-link>
      </div>

      <div v-else class="grid lg:grid-cols-3 gap-8 items-start">

        <div class="lg:col-span-2 bg-white rounded-lg shadow-md">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="item in cartStore.items" :key="item.id" class="p-4 sm:p-6 flex">
              <div class="flex-shrink-0">
                <img :src="item.image" :alt="item.name" class="w-24 h-24 rounded-md object-cover">
              </div>

              <div class="ml-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="text-lg font-medium text-gray-900">{{ item.name }}</h3>
                  <p class="text-md text-gray-700 mt-1">{{ item.price }}</p>
                </div>

                <div class="flex items-center justify-between mt-4">

                  <div class="flex items-center border border-gray-300 rounded-md">
                    <button @click="cartStore.decreaseQuantity(item.id)" class="px-3 py-1 text-lg text-gray-600 hover:bg-gray-100">-</button>
                    <span class="px-4 py-1 text-md font-medium">{{ item.quantity }}</span>
                    <button @click="cartStore.increaseQuantity(item.id)" class="px-3 py-1 text-lg text-gray-600 hover:bg-gray-100">+</button>
                  </div>

                  <button @click="cartStore.removeItemFromCart(item.id)" class="font-medium text-red-600 hover:text-red-500">
                    Hapus
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>


        <div class="lg:col-span-1 bg-white p-6 rounded-lg shadow-md sticky top-24">
          <h2 class="text-lg font-medium text-gray-900 border-b pb-4">Ringkasan Pesanan</h2>
          <div class="mt-4 space-y-2">
            <div class="flex items-center justify-between">
              <dt class="text-md text-gray-600">Total Harga</dt>
              <dd class="text-xl font-bold text-gray-900">{{ cartStore.totalPrice }}</dd>
            </div>
          </div>
          <div class="mt-6">
            <button class="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700">
              Lanjut ke Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore';
const cartStore = useCartStore();
</script>
