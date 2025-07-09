<template>
  <div class="relative w-full overflow-hidden h-[320px] bg-gray-200 rounded-lg shadow">
    <!-- Tampilkan pesan loading -->
    <div v-if="loading" class="w-full h-full flex justify-center items-center">
      <p class="text-gray-500">Memuat banner...</p>
    </div>

    <!-- Tampilkan pesan error -->
    <div v-else-if="error" class="w-full h-full flex justify-center items-center bg-red-100">
      <p class="text-red-600">Gagal memuat banner!</p>
    </div>

    <!-- Tampilkan carousel jika data berhasil dimuat dan ada isinya -->
    <template v-else-if="banners.length > 0">
      <img
        :src="banners[currentIndex].image"
        :alt="banners[currentIndex].alt"
        class="object-cover w-full h-full transition-opacity duration-700"
        :key="currentIndex" 
      />
      <div class="absolute inset-0 flex justify-between items-center px-4">
        <button @click="prev" class="bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50 transition">&#8592;</button>
        <button @click="next" class="bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50 transition">&#8594;</button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 1. Hapus import gambar statis
// import banner1 from '../assets/image/Barner1.jpeg' ...

// 2. Buat variabel reaktif untuk data, loading, dan error
const banners = ref([])
const loading = ref(true)
const error = ref(null)
const currentIndex = ref(0)
let intervalId = null; // Untuk menyimpan ID dari setInterval

// 3. Buat fungsi untuk mengambil data dari API
async function fetchBanners() {
  try {
    const response = await fetch('http://localhost:3000/banners')
    if (!response.ok) {
      throw new Error('Gagal mengambil data banner')
    }
    banners.value = await response.json()
  } catch (e) {
    error.value = e
    console.error(e)
  } finally {
    loading.value = false
  }
}

function next() {
  if (banners.value.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % banners.value.length
  }
}

function prev() {
  if (banners.value.length > 0) {
    currentIndex.value = (currentIndex.value - 1 + banners.value.length) % banners.value.length
  }
}

// Panggil fungsi fetch saat komponen di-mount
onMounted(() => {
  fetchBanners()
  // Jalankan auto-play setelah data berhasil di-fetch
  intervalId = setInterval(next, 4000)
})

// Hentikan interval saat komponen di-unmount untuk mencegah memory leak
onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
