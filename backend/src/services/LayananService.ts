// src/services/LayananService.ts

import { prisma } from '../db.js';
import type { MasterLayanan } from '../generated/client/index.js';
import type { DatabaseOps } from '../interfaces/DatabaseOps.js';

export type LayananCreateDTO = {
  namaLayanan: string;
  waktuBerangkat: string;
  rute: string;
  biaya: number;
  stokKursi: number;
};

export type LayananUpdateDTO = Partial<LayananCreateDTO>;

export class LayananService
  implements DatabaseOps<MasterLayanan, LayananCreateDTO, LayananUpdateDTO>
{
  async insert(data: LayananCreateDTO): Promise<MasterLayanan> {
    return prisma.masterLayanan.create({
      data: {
        namaLayanan: data.namaLayanan,
        waktuBerangkat: new Date(data.waktuBerangkat),
        rute: data.rute,
        biaya: data.biaya,
        stokKursi: data.stokKursi
      }
    });
  }

  async update(id: number, data: LayananUpdateDTO): Promise<MasterLayanan> {
    return prisma.masterLayanan.update({
      where: { id },
      data: {
        ...(data.namaLayanan && { namaLayanan: data.namaLayanan }),
        ...(data.waktuBerangkat && {
          waktuBerangkat: new Date(data.waktuBerangkat)
        }),
        ...(data.rute && { rute: data.rute }),
        ...(data.biaya !== undefined && { biaya: data.biaya }),
        ...(data.stokKursi !== undefined && { stokKursi: data.stokKursi })
      }
    });
  }

  async delete(id: number): Promise<void> {
    try {
      // Cek apakah ada pemesanan terkait
      const pemesananCount = await prisma.tbPemesanan.count({
        where: { layananId: id }
      });

      if (pemesananCount > 0) {
        throw new Error(
          `Tidak bisa menghapus layanan. Ada ${pemesananCount} pemesanan yang terkait.`
        );
      }

      // Jika tidak ada pemesanan, baru hapus
      await prisma.masterLayanan.delete({ where: { id } });
    } catch (err: any) {
      // Tangkap error foreign key
      if (err.code === 'P2003') {
        throw new Error(
          'Tidak bisa menghapus layanan karena ada data pemesanan yang terkait'
        );
      }
      throw err;
    }
  }

  async selectAll(): Promise<MasterLayanan[]> {
    const rows = await prisma.masterLayanan.findMany({
      orderBy: { id: 'desc' }
    });
    const data: MasterLayanan[] = [...rows];
    return data;
  }

  async selectById(id: number): Promise<MasterLayanan | null> {
    return prisma.masterLayanan.findUnique({ where: { id } });
  }

  async search(filter: Partial<MasterLayanan>): Promise<MasterLayanan[]> {
    return prisma.masterLayanan.findMany({ where: filter });
  }
}
