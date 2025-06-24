<template>
  <div class="relative w-full overflow-hidden h-[320px] bg-gray-100 rounded-lg shadow">
    <img
      :src="images[currentIndex]"
      alt="banner"
      class="object-cover w-full h-full transition-all duration-700"
    />
    <div class="absolute inset-0 flex justify-between items-center px-4">
      <button @click="prev" class="text-white text-3xl">&#8592;</button>
      <button @click="next" class="text-white text-3xl">&#8594;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ✅ Import gambar lokal
import banner1 from '../assets/image/Barner1.jpeg'
import banner2 from '../assets/image/Barner2.jpeg'
import banner3 from '../assets/image/Barner3.jpg'

const images = [banner1, banner3, banner2]

const currentIndex = ref(0)

function next() {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

onMounted(() => {
  setInterval(next, 4000)
})
</script>
