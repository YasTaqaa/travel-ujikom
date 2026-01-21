// src/index.ts

// Deskripsi: Entry point API jasa travel (login, layanan, pemesanan, transaksi).
// Initial: Server belum berjalan.
// Final: Server Elysia berjalan di http://localhost:3001.
// Author: [Nama], v1.0, 2026-01-21

import { Elysia, t } from 'elysia';
import cors from '@elysiajs/cors';
import { jwt as jwtPlugin } from '@elysiajs/jwt';
import bcrypt from 'bcryptjs';
import { prisma } from './db.js';
import { LayananService } from './services/LayananService.js';
import { PemesananService } from './services/PemesananService.js';

const layananService = new LayananService();
const pemesananService = new PemesananService();

const app = new Elysia()
  .use(cors())
  .use(
    jwtPlugin({
      name: 'jwt',
      secret: process.env.JWT_SECRET || 'adalah-pokoknya-sangat-rahasia'
    })
  )

  // ----------------------------------------
  // LOGIN
  // ----------------------------------------
  .post(
    '/login',
    async ({ body, jwt, set }) => {
      // Initial: User belum terautentikasi.
      // Final: Token JWT dikembalikan bila username/password valid.
      try {
        const { username, password } = body as any;
        const user = await prisma.masterUser.findUnique({
          where: { username }
        });

        if (!user) {
          set.status = 401;
          return { message: 'Username atau password salah' };
        }

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) {
          set.status = 401;
          return { message: 'Username atau password salah' };
        }

        const token = await jwt.sign({
          sub: String(user.id),
          role: user.role,
          username: user.username
        });

        return { token, role: user.role, username: user.username };
      } catch (err) {
        console.error('Login error:', err);
        set.status = 500;
        return { message: 'Terjadi kesalahan saat login' };
      }
    },
    {
      body: t.Object({
        username: t.String(),
        password: t.String()
      })
    }
  )

  // ----------------------------------------
  // DERIVE CURRENT USER DARI JWT
  // ----------------------------------------
  .derive(async ({ jwt, request }) => {
    const auth = request.headers.get('authorization');
    if (!auth || !auth.startsWith('Bearer ')) {
      return { currentUser: null as any };
    }

    const token = auth.replace('Bearer ', '');
    try {
      const payload = await jwt.verify(token);
      return { currentUser: payload };
    } catch (err) {
      console.warn('JWT invalid:', err);
      return { currentUser: null as any };
    }
  })

  // ----------------------------------------
  // MASTER LAYANAN (ADMIN, KASIR, PELANGGAN)
  // ----------------------------------------
  .get('/layanan', async ({ set }) => {
    // Initial: Data layanan belum diambil.
    // Final: Array layanan dikembalikan.
    try {
      const data = await layananService.selectAll();
      return data;
    } catch (err) {
      console.error('GET /layanan error:', err);
      set.status = 500;
      return { message: 'Gagal mengambil data layanan' };
    }
  })

  .post(
    '/layanan',
    async ({ body, currentUser, set }) => {
      // Initial: Data layanan baru dikirim dari client.
      // Final: Record layanan baru tersimpan di database.
      if (!currentUser || currentUser.role !== 'admin') {
        set.status = 403;
        return { message: 'Anda tidak memiliki hak akses' };
      }

      try {
        const created = await layananService.insert(body as any);
        return created;
      } catch (err) {
        console.error('POST /layanan error:', err);
        set.status = 500;
        return { message: 'Gagal menambah layanan' };
      }
    },
    {
      body: t.Object({
        namaLayanan: t.String(),
        waktuBerangkat: t.String(),
        rute: t.String(),
        biaya: t.Number(),
        stokKursi: t.Number()
      })
    }
  )

  .put(
    '/layanan/:id',
    async ({ params, body, currentUser, set }) => {
      // Initial: Admin ingin mengupdate layanan.
      // Final: Data layanan terupdate di database.
      if (!currentUser || currentUser.role !== 'admin') {
        set.status = 403;
        return { message: 'Anda tidak memiliki hak akses' };
      }

      try {
        const id = Number(params.id);
        const updated = await layananService.update(id, body as any);
        return updated;
      } catch (err) {
        console.error('PUT /layanan/:id error:', err);
        set.status = 400;
        return { message: 'Gagal mengupdate layanan' };
      }
    },
    {
      body: t.Object({
        namaLayanan: t.Optional(t.String()),
        waktuBerangkat: t.Optional(t.String()),
        rute: t.Optional(t.String()),
        biaya: t.Optional(t.Number()),
        stokKursi: t.Optional(t.Number())
      })
    }
  )

  .delete(
    '/layanan/:id',
    async ({ params, currentUser, set }) => {
      // Initial: Admin ingin menghapus layanan.
      // Final: Data layanan dihapus dari database (jika tidak ada pemesanan terkait).
      if (!currentUser || currentUser.role !== 'admin') {
        set.status = 403;
        return { message: 'Anda tidak memiliki hak akses' };
      }

      try {
        const id = Number(params.id);
        await layananService.delete(id);
        return { message: 'Layanan berhasil dihapus' };
      } catch (err: any) {
        console.error('DELETE /layanan/:id error:', err);
        set.status = 400;
        return {
          message:
            err.message ||
            'Gagal menghapus layanan. Pastikan tidak ada pemesanan terkait.'
        };
      }
    }
  )

  // ----------------------------------------
  // PEMESANAN (PELANGGAN)
  // ----------------------------------------
  .post(
    '/pemesanan',
    async ({ body, currentUser, set }) => {
      // Initial: Pelanggan belum memiliki pemesanan.
      // Final: Pemesanan baru tercatat dan stok kursi berkurang.
      if (!currentUser || currentUser.role !== 'pelanggan') {
        set.status = 403;
        return { message: 'Hanya pelanggan yang dapat melakukan pemesanan' };
      }

      try {
        const pemesanan = await pemesananService.buatPemesanan(
          Number(currentUser.sub),
          {
            layananId: (body as any).layananId,
            jumlahTiket: (body as any).jumlahTiket
          }
        );
        return pemesanan;
      } catch (err: any) {
        console.error('POST /pemesanan error:', err);
        set.status = 400;
        return { message: err.message || 'Gagal membuat pemesanan' };
      }
    },
    {
      body: t.Object({
        layananId: t.Number(),
        jumlahTiket: t.Number()
      })
    }
  )

  .get('/pemesanan', async ({ currentUser, set }) => {
    // Initial: Pelanggan ingin melihat riwayat pemesanan.
    // Final: List pemesanan user dikembalikan.
    if (!currentUser) {
      set.status = 401;
      return { message: 'Anda harus login' };
    }

    try {
      const list = await pemesananService.getPemesananByUser(
        Number(currentUser.sub)
      );

      return list.map((p: any) => ({
        id: p.id,
        layananId: p.layananId,
        jumlahTiket: p.jumlahTiket,
        totalHarga: p.totalHarga,
        status: p.status,
        createdAt: p.createdAt
      }));
    } catch (err) {
      console.error('GET /pemesanan error:', err);
      set.status = 500;
      return { message: 'Gagal memuat pemesanan' };
    }
  })

  // ----------------------------------------
  // TRANSAKSI PEMBAYARAN (ADMIN / KASIR)
  // ----------------------------------------
  .post(
    '/pembayaran',
    async ({ body, currentUser, set }) => {
      // Initial: Pemesanan berstatus 'pesan'.
      // Final: Pemesanan berubah status jadi 'bayar' dan transaksi tercatat.
      if (
        !currentUser ||
        (currentUser.role !== 'kasir' && currentUser.role !== 'admin')
      ) {
        set.status = 403;
        return {
          message: 'Hanya kasir atau admin yang dapat memproses pembayaran'
        };
      }

      try {
        const result = await pemesananService.bayarPemesanan(
          (body as any).pemesananId,
          Number(currentUser.sub),
          (body as any).jumlahBayar
        );
        return result;
      } catch (err: any) {
        console.error('POST /pembayaran error:', err);
        set.status = 400;
        return { message: err.message || 'Gagal memproses pembayaran' };
      }
    },
    {
      body: t.Object({
        pemesananId: t.Number(),
        jumlahBayar: t.Number()
      })
    }
  )

  // ✅ RIWAYAT TRANSAKSI UNTUK KASIR / ADMIN
  .get('/transaksi', async ({ currentUser, set }) => {
    // Hanya kasir dan admin yang boleh melihat riwayat transaksi.
    if (
      !currentUser ||
      (currentUser.role !== 'kasir' && currentUser.role !== 'admin')
    ) {
      set.status = 403;
      return {
        message: 'Hanya kasir atau admin yang dapat melihat riwayat transaksi'
      };
    }

    try {
const list = await prisma.tbTransaksi.findMany({
  orderBy: { createdAt: 'desc' },
  include: {
    pemesanan: true 
  }
});

return list.map((t: any) => ({
  id: t.id,
  pemesananId: t.pemesananId,
  jumlahBayar: t.jumlahBayar,
  statusBayar: t.statusBayar,
  createdAt: t.createdAt,
  userId: t.pemesanan?.userId,
  totalHarga: t.pemesanan?.totalHarga,
  statusPemesanan: t.pemesanan?.status
}));

    } catch (err) {
      console.error('GET /transaksi error:', err);
      set.status = 500;
      return { message: 'Gagal memuat riwayat transaksi' };
    }
  })

  // ----------------------------------------
  // HEALTH CHECK
  // ----------------------------------------
  .get('/', () => ({ message: 'Travel API OK' }));

app.listen(3001);

console.log('Travel API running at http://localhost:3001');
