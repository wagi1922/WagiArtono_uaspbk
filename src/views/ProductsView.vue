<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Semua Produk Kami</h1>
      <p class="mt-2 text-lg text-gray-600">Temukan laptop terbaik untuk kebutuhan Anda.</p>
    </div>
    
    <!-- 
      Kita cukup memanggil komponen ProductCard di sini.
      Komponen ini sudah memiliki logika untuk fetch data dari store
      dan menampilkan semua produk dalam sebuah grid. Praktis!
    -->
    <ProductCard />
  </div>
</template>

<script setup>
// Impor komponen yang ingin kita gunakan kembali
import ProductCard from '../components/ProductCard.vue';

// Tidak perlu logika lain, karena semua sudah ditangani oleh ProductCard
</script>
