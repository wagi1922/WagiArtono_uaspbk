<template>
  <Navbar />
  <main>
    <router-view />
  </main>

  <Footer />
</template>

<script setup>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

<style>
main {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>