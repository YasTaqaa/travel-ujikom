// backend/src/services/PemesananService.ts

// Deskripsi: Service untuk menangani pemesanan tiket dan transaksi pembayaran.
// Initial: Data master_layanan dan master_user sudah tersedia di database.
// Final: Pemesanan tercatat, stok berkurang, dan transaksi pembayaran tersimpan.
// Author: [ilyas], v1.0, 2026-01-21

import { prisma } from '../db.js';
import type { TbPemesanan, TbTransaksi } from '../generated/client/index.js';

export type PemesananCreateDTO = {
  layananId: number;
  jumlahTiket: number;
};

export class PemesananService {
  /**
   * Deskripsi: Membuat pemesanan baru dan mengurangi stok kursi layanan.
   * Initial state: Pelanggan memilih layanan dan mengisi jumlah tiket.
   * Final state: Record pemesanan tersimpan dan stok kursi layanan berkurang.
   * Author: [ilyas], v1.0, 2026-01-21
   */
  async buatPemesanan(
    userId: number,
    dto: PemesananCreateDTO
  ): Promise<TbPemesanan> {
    return prisma.$transaction(async (tx) => {
      const layanan = await tx.masterLayanan.findUnique({
        where: { id: dto.layananId }
      });

      if (!layanan) {
        throw new Error('Layanan tidak ditemukan');
      }

      if (layanan.stokKursi < dto.jumlahTiket) {
        throw new Error('Stok kursi tidak mencukupi');
      }

      const totalHarga = layanan.biaya * dto.jumlahTiket;

      const pemesanan = await tx.tbPemesanan.create({
        data: {
          userId,
          layananId: dto.layananId,
          jumlahTiket: dto.jumlahTiket,
          totalHarga,
          status: 'pesan' 
        }
      });

      await tx.masterLayanan.update({
        where: { id: dto.layananId },
        data: { stokKursi: layanan.stokKursi - dto.jumlahTiket }
      });

      return pemesanan;
    });
  }

  /**
   * Deskripsi: Memproses pembayaran suatu pemesanan.
   * Initial state: Pemesanan berstatus 'pesan' dan belum ada transaksi.
   * Final state: Transaksi tercatat dan status pemesanan berubah menjadi 'bayar'.
   * Author: [ilyas], v1.0, 2026-01-21
   */
  async bayarPemesanan(
    pemesananId: number,
    kasirId: number,
    jumlahBayar: number
  ): Promise<{ pemesanan: TbPemesanan; transaksi: TbTransaksi }> {
    return prisma.$transaction(async (tx) => {
      // Cek apakah pemesanan ada
      const pemesanan = await tx.tbPemesanan.findUnique({
        where: { id: pemesananId }
      });

      if (!pemesanan) {
        throw new Error('Pemesanan tidak ditemukan');
      }

      // Cek apakah sudah ada transaksi untuk pemesanan ini
      const existingTransaksi = await tx.tbTransaksi.findUnique({
        where: { pemesananId }
      });

      if (existingTransaksi) {
        throw new Error('Pemesanan ini sudah dibayar sebelumnya');
      }

      if (jumlahBayar < pemesanan.totalHarga) {
        throw new Error('Jumlah bayar kurang dari total harga');
      }

      // Update status pemesanan ke 'bayar'
      const updated = await tx.tbPemesanan.update({
        where: { id: pemesananId },
        data: { status: 'bayar' }
      });

      // Buat record transaksi
      const transaksi = await tx.tbTransaksi.create({
        data: {
          pemesananId,
          userId: kasirId,
          jumlahBayar,
          statusBayar: 'lunas'
        }
      });

      return { pemesanan: updated, transaksi };
    });
  }

  /**
   * Deskripsi: Mengambil semua pemesanan milik 1 user (pelanggan).
   * Initial state: User telah login.
   * Final state: Daftar pemesanan user dikembalikan terurut dari terbaru.
   * Author: [ilyas], v1.0, 2026-01-21
   */
  async getPemesananByUser(userId: number): Promise<TbPemesanan[]> {
    return prisma.tbPemesanan.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }
}
