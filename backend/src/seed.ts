// src/seed.ts
// Seed user default: admin, kasir, pelanggan.

import { prisma } from './db.js';
import bcrypt from 'bcryptjs';

async function main() {
  const passwordAdmin = await bcrypt.hash('admin123', 10);
  const passwordKasir = await bcrypt.hash('kasir123', 10);
  const passwordPelanggan = await bcrypt.hash('pel123', 10);

  await prisma.masterUser.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: passwordAdmin,
      role: 'admin'
    }
  });

  await prisma.masterUser.upsert({
    where: { username: 'kasir' },
    update: {},
    create: {
      username: 'kasir',
      password: passwordKasir,
      role: 'kasir'
    }
  });

  await prisma.masterUser.upsert({
    where: { username: 'pelanggan' },
    update: {},
    create: {
      username: 'pelanggan',
      password: passwordPelanggan,
      role: 'pelanggan'
    }
  });

  console.log('✅ User siap: admin/admin123, kasir/kasir123, pelanggan/pel123');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => prisma.$disconnect());
