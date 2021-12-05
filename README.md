MVP di sprint 2:
- List Internship
- Detail Intenship
- Login
- Regis
- Dashboard (Landing Page)

Keseluruhan program ada di branch main.

Cara mengakses list magang, dan detail magang (disini masih menggunakan local, karena ketika di fetch dengan API yang sudah di deploy terdapat error CORS) : 
1. Clone dari github backend, https://github.com/GunMaJoss/GunMA-Backend.git
2. Buka terminal masuk ke staging, jalankan perintah $ code . (untuk membuka visual code) pilih file .env, kemudian ubah line 5 menjadi APP_URL=http://localhost, line 11 menjadi DB_HOST=127.0.0.1, line 13 menjadi DB_DATABASE=gunmajoss, dan line 15 menjadi DB_PASSWORD=
3. Selanjutnya jalankan $ php artisan serve di terminalnya
4. Buka chrome/browser lain, lalu jalankan http://localhost:8000/
5. Jalankan XAMPP, buka phpMyAdmin kemudian import database gunmajoss.sql (ada di branch main, nomer 3 dari bawah)
6. Kemudian jalankan npm start di visual codenya

-----------------------------------------------------------------------------------------------------------

Sprint goal sprint 3:
1. Searching
2. Profile (Edit)
3. Filter (Paid, WFH)
4. Button login di navbar, ketika user sudah berhasil login. Maka buttonnya akan berubah menjadi profile

Review sprint 2 yaitu membetulkan dari segi UI, kami sudah merevisinya.
