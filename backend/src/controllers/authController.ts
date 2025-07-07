import { Request, Response } from "express";

export const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email === "admin@demo.com" && password === "contraseña123") {
    res.json({
      token: "fake-jwt-token",
      user: { id: 1, email, name: "Demo User" }
    });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
};

export const registerUser = (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.json({ message: "Usuario registrado correctamente" });
};