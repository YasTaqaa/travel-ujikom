// Deskripsi: Interface operasi dasar database generik.
// Initial: Belum ada objek pemanggil.
// Final: Interface siap diimplementasikan oleh class service.
// Author: [Nama], v1.0, 2026-01-21

export interface DatabaseOps<T, CreateDTO = T, UpdateDTO = Partial<T>> {
  insert(data: CreateDTO): Promise<T>;
  update(id: number, data: UpdateDTO): Promise<T>;
  delete(id: number): Promise<void>;
  selectAll(): Promise<T[]>;
  selectById(id: number): Promise<T | null>;
  search(filter: Partial<T>): Promise<T[]>;
}
