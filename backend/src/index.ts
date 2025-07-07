import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas de autenticación
app.use("/api", authRoutes);

app.get("/", (_req, res) => {
  res.send("API Node.js + TypeScript funcionando 🚀");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});