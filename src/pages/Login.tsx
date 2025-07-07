import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import type { AppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error);
        return;
      }
      localStorage.setItem("token", data.token);
      dispatch(login({ id: data.user.id, name: data.user.name, email: data.user.email }));
      navigate("/");
    } catch (err) {
      setError("Error de conexión.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
      <button type="submit">Iniciar sesión</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default Login;