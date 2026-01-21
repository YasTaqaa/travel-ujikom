# Sistem Pemesanan & Pembayaran Tiket Travel

Project ini adalah aplikasi fullstack untuk pemesanan dan pembayaran tiket travel dengan pemisahan role **admin**, **kasir**, dan **pelanggan**. Backend dibangun dengan Elysia + Prisma, frontend menggunakan Next.js App Router.

## Fitur Utama

- Manajemen **layanan travel** (nama layanan, rute, waktu berangkat, biaya, stok kursi) oleh admin.
- **Pemesanan tiket** oleh pelanggan, termasuk pengurangan stok kursi otomatis dan perhitungan total harga.
- **Proses pembayaran** pemesanan oleh kasir/admin, membuat record transaksi dan mengubah status pemesanan menjadi dibayar.
- Halaman kasir untuk:
  - Melihat daftar layanan.
  - Memilih pemesanan yang akan dibayar.
  - Melihat **riwayat pembayaran pemesanan** dalam bentuk tabel.
- Autentikasi JWT dengan role-based access (admin, kasir, pelanggan).

## Teknologi yang Digunakan

- **Backend**
  - Node.js + [Elysia](https://elysiajs.com) sebagai HTTP framework.
  - Prisma ORM (terhubung ke DB, misalnya MySQL/PostgreSQL sesuai `DATABASE_URL`).
  - JWT untuk autentikasi, bcrypt untuk hashing password.

- **Frontend**
  - Next.js (App Router) dengan TypeScript.
  - React hooks untuk state dan pemanggilan API.
  - Tailwind CSS / utility classes untuk tampilan tabel dan layout kasir.

