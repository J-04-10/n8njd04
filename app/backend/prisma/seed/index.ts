import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed labels as catalogs
  const labels = [
    { name: 'Prioridad Alta', color: '#e53e3e' },
    { name: 'Seguimiento', color: '#3182ce' },
    { name: 'Bot Resuelto', color: '#38a169' },
  ];
  for (const label of labels) {
    await prisma.label.upsert({ where: { name: label.name }, update: {}, create: label });
  }

  // Seed typifications
  const typifications = [
    { name: 'Cita agendada', category: 'Citas', requiredFields: { citaId: true } },
    { name: 'Información general', category: 'Info', requiredFields: {} },
  ];
  for (const t of typifications) {
    await prisma.typification.create({ data: t });
  }

  console.log('Seed completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });