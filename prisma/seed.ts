// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed de datos...");

  // Crear Carreras
  const sistemas = await prisma.carrera.create({
    data: {
      nombre: "Ingeniería en Sistemas",
      creditos: 240,
    },
  });

  const medicina = await prisma.carrera.create({
    data: {
      nombre: "Medicina",
      creditos: 300,
    },
  });

  // Crear Docentes
  const docente1 = await prisma.docente.create({
    data: {
      nombre: "Juan Pérez",
      especialidad: "Programación",
    },
  });

  const docente2 = await prisma.docente.create({
    data: {
      nombre: "María Gómez",
      especialidad: "Anatomía",
    },
  });

  // Crear Materias
  const materia1 = await prisma.materia.create({
    data: {
      nombre: "Algoritmos",
      creditos: 6,
      carreraId: sistemas.id,
      docenteId: docente1.id,
    },
  });

  const materia2 = await prisma.materia.create({
    data: {
      nombre: "Fisiología",
      creditos: 8,
      carreraId: medicina.id,
      docenteId: docente2.id,
    },
  });

  // Crear Estudiantes
  await prisma.estudiante.createMany({
    data: [
      { nombre: "Carlos Sánchez", carreraId: sistemas.id },
      { nombre: "Ana Torres", carreraId: sistemas.id },
      { nombre: "Luis Fernández", carreraId: medicina.id },
    ],
  });

  console.log("✅ Seed completado con éxito");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
