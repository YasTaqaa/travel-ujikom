# Sistem Pemesanan & Pembayaran Tiket Travel

Project ini adalah aplikasi fullstack untuk pemesanan dan pembayaran tiket travel dengan pemisahan role **admin**, **kasir**, dan **pelanggan**. Backend dibangun dengan Elysia + Prisma, frontend menggunakan Next.js App Router.[file:213][file:224]

## Fitur Utama

- Manajemen **layanan travel** (nama layanan, rute, waktu berangkat, biaya, stok kursi) oleh admin.[file:213]
- **Pemesanan tiket** oleh pelanggan, termasuk pengurangan stok kursi otomatis dan perhitungan total harga.[file:200]
- **Proses pembayaran** pemesanan oleh kasir/admin, membuat record transaksi dan mengubah status pemesanan menjadi dibayar.[file:200][file:213]
- Halaman kasir untuk:
  - Melihat daftar layanan.
  - Memilih pemesanan yang akan dibayar.
  - Melihat **riwayat pembayaran pemesanan** dalam bentuk tabel.[file:224]
- Autentikasi JWT dengan role-based access (admin, kasir, pelanggan).[file:213]

## Teknologi yang Digunakan

- **Backend**
  - Node.js + [Elysia](https://elysiajs.com) sebagai HTTP framework.[file:213]
  - Prisma ORM (terhubung ke DB, misalnya MySQL/PostgreSQL sesuai `DATABASE_URL`).[file:200]
  - JWT untuk autentikasi, bcrypt untuk hashing password.[file:213]

- **Frontend**
  - Next.js (App Router) dengan TypeScript.[file:224]
  - React hooks untuk state dan pemanggilan API.
  - Tailwind CSS / utility classes untuk tampilan tabel dan layout kasir.[file:224]

Struktur project (direkomendasikan):

```text
proyek-travel/
├─ backend/
│  ├─ src/
│  │  ├─ index.ts
│  │  ├─ db.ts
│  │  ├─ services/
│  │  │  ├─ LayananService.ts
│  │  │  └─ PemesananService.ts
│  │  └─ seed.ts (opsional)
│  └─ prisma/
│     └─ schema.prisma
├─ frontend/
│  └─ src/app/
│     ├─ login/page.tsx
│     ├─ pelanggan/page.tsx
│     └─ kasir/page.tsx
└─ README.md
1. Login
Endpoint: POST /login

Input: username, password

Output: token JWT + role + username. Token dipakai di header Authorization: Bearer <token> untuk semua endpoint terproteksi.[file:213]

2. Layanan Travel
Endpoint:

GET /layanan – semua role bisa lihat daftar layanan.[file:213]

POST /layanan – tambah layanan (hanya admin).

PUT /layanan/:id – edit layanan (admin).

DELETE /layanan/:id – hapus layanan (admin), dicek relasi pemesanan.[file:213]

Data layanan mencakup nama, rute, waktu berangkat, biaya, dan stok kursi.[file:213]

3. Pemesanan oleh Pelanggan
Endpoint: POST /pemesanan (role: pelanggan).[file:213]

Logika utama di PemesananService.buatPemesanan:

Cek layanan ada.

Cek stok kursi cukup.

Hitung totalHarga = biaya * jumlahTiket.

Simpan tbPemesanan dengan status pesan.

Kurangi stok kursi di masterLayanan.[file:200]

Riwayat pemesanan:

GET /pemesanan → kembalikan pemesanan milik user yang login.[file:213]

4. Pembayaran oleh Kasir/Admin
Endpoint: POST /pembayaran (role: kasir/admin).[file:213]

Logika PemesananService.bayarPemesanan:

Cek pemesanan ada.

Cek belum ada transaksi sebelumnya untuk pemesananId yang sama.

Update status pemesanan menjadi bayar.

Simpan record tbTransaksi dengan statusBayar lunas dan menyimpan kasirId (userId).[file:200]

5. Riwayat Transaksi Kasir
Endpoint: GET /transaksi (role: kasir/admin).[file:213]

Mengembalikan list transaksi terbaru beserta informasi pemesanan terkait (total harga, status pemesanan, dll) yang kemudian ditampilkan di halaman kasir dalam bentuk tabel.[file:224]

Contoh tampilan tabel di kasir:

Kolom: ID, Pemesanan, Total, Dibayar, Status, Tanggal.

Status lunas ditampilkan dengan indikator visual (badge hijau). [file:224]

Menjalankan Backend
Masuk ke folder backend dan install dependency:

bash
cd backend
npm install
Atur .env:

text
DATABASE_URL="mysql://user:pass@localhost:3306/travel_db"
JWT_SECRET="adalah-pokoknya-sangat-rahasia"
Jalankan migrate & generate Prisma:

bash
npx prisma migrate dev
npx prisma generate
(Opsional) Seed data awal (user admin/kasir/pelanggan dan layanan):

bash
npx ts-node src/seed.ts
Jalankan server:

bash
npm run dev
# API: http://localhost:3001
Endpoint utama: /login, /layanan, /pemesanan, /pembayaran, /transaksi, dan / (health check). [file:213]

Menjalankan Frontend
Masuk ke folder frontend dan install dependency:

bash
cd frontend
npm install
Pastikan base URL backend (di env/config frontend) mengarah ke:

text
http://localhost:3001
Jalankan dev server:

bash
npm run dev
# Frontend: http://localhost:3000
Halaman utama:

/login – form login, menyimpan token dan role ke localStorage.

/pelanggan – pemesanan tiket oleh pelanggan.

/kasir – proses pembayaran & riwayat transaksi.
