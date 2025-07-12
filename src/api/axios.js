// src/api/axios.js

import axios from 'axios';

// Buat instance Axios dengan konfigurasi kustom
const api = axios.create({
  // Tetapkan baseURL sehingga kita tidak perlu mengetiknya di setiap permintaan
  baseURL: 'http://localhost:3000',
  // Anda juga bisa menambahkan headers umum di sini jika diperlukan nanti
  // headers: { 'X-Custom-Header': 'foobar' }
});

// Ekspor instance yang sudah dikonfigurasi agar bisa digunakan di seluruh aplikasi
export default api;
