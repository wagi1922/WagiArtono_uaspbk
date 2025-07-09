<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-4 text-center">Hubungi Kami</h1>
          <p class="text-center text-gray-600 mb-8">
            Kami senang mendengar dari Anda! Silakan hubungi kami melalui detail di bawah ini.
          </p>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- Info Kontak -->
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Alamat Kantor</h3>
                <p class="text-gray-600">Jl. Teknologi No. 123, Jakarta, Indonesia</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Email</h3>
                <p class="text-blue-600 hover:underline">support@myshop.com</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Telepon</h3>
                <p class="text-gray-600">(021) 123-4567</p>
              </div>
            </div>

            <!-- Form Kontak Sederhana -->
            <form action="#" method="POST" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input type="text" id="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Alamat Email</label>
                <input type="email" id="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Pesan Anda</label>
                <textarea id="message" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Tidak perlu script untuk halaman statis ini
</script>
