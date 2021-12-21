MVP di sprint 2:

List Internship
Detail Intenship
Login
Regis
Dashboard (Landing Page)
Keseluruhan program ada di branch main.

Cara mengakses list magang (disini masih menggunakan local, karena ketika di fetch dengan API yang sudah di deploy terdapat error CORS) :

Clone dari github backend, https://github.com/GunMaJoss/GunMA-Backend.git
Buka terminal masuk ke staging, jalankan perintah $ code . (untuk membuka visual code) pilih file .env, kemudian ubah line 5 menjadi APP_URL=http://localhost, line 11 menjadi DB_HOST=127.0.0.1, line 13 menjadi DB_DATABASE=gunmajoss, dan line 15 menjadi DB_PASSWORD=
Selanjutnya jalankan $ php artisan serve
Buka chrome/browser lain, lalu jalankan http://localhost:8000/
Jalankan XAMPP, buka phpMyAdmin kemudian import database gunmajoss.sql (ada di branch main, nomer 3 dari bawah)
Kemudian jalankan npm start di visual codenya

===================================================================================
