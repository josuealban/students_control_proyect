import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// -------------------- Estudiantes --------------------
app.get("/api/estudiantes", async (req, res) => {
  const estudiantes = await prisma.estudiante.findMany({
    include: { carrera: true },
  });
  res.json(estudiantes);
});

app.post("/api/estudiantes", async (req, res) => {
  const { nombre, carreraId } = req.body;
  const estudiante = await prisma.estudiante.create({
    data: { nombre, carreraId },
  });
  res.json(estudiante);
});

// -------------------- Docentes --------------------
app.get("/api/docentes", async (req, res) => {
  const docentes = await prisma.docente.findMany();
  res.json(docentes);
});

app.post("/api/docentes", async (req, res) => {
  const { nombre, especialidad } = req.body;
  const docente = await prisma.docente.create({
    data: { nombre, especialidad },
  });
  res.json(docente);
});

// -------------------- Carreras --------------------
app.get("/api/carreras", async (req, res) => {
  const carreras = await prisma.carrera.findMany();
  res.json(carreras);
});

app.post("/api/carreras", async (req, res) => {
  const { nombre, creditos } = req.body;
  const carrera = await prisma.carrera.create({
    data: { nombre, creditos },
  });
  res.json(carrera);
});

// -------------------- Materias --------------------
app.get("/api/materias", async (req, res) => {
  const materias = await prisma.materia.findMany({
    include: { docente: true, carrera: true },
  });
  res.json(materias);
});

app.post("/api/materias", async (req, res) => {
  const { nombre, creditos, carreraId, docenteId } = req.body;
  const materia = await prisma.materia.create({
    data: { nombre, creditos, carreraId, docenteId },
  });
  res.json(materia);
});

// -------------------- Servidor --------------------
app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
