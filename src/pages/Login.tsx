import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SeoHelmet } from "../components/SeoHelmet";

const LoginWrapper = styled.div`
  max-width: 420px;
  margin: 40px auto;
  padding: 2rem 2rem 2.2rem 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 24px rgba(80,80,120,0.08);
  text-align: center;

  @media (max-width: 600px) {
    max-width: 98vw;
    margin: 18px 4vw;
    padding: 1.2rem 0.7rem 1.3rem 0.7rem;
    border-radius: 8px;
    font-size: 0.97rem;
    box-shadow: 0 1px 10px rgba(80,80,120,0.08);
  }
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #4f46e5;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 1.1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding: 0.7rem;
    border-radius: 7px;
    margin-bottom: 0.7rem;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  background: #4f46e5;
  color: #fff;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 0.8rem;
  &:hover {
    background: #3730a3;
  }

  @media (max-width: 600px) {
    font-size: 0.99rem;
    padding: 0.7rem;
    border-radius: 7px;
    margin-bottom: 0.7rem;
  }
`;

const SecondaryButton = styled.button`
  background: none;
  color: #4f46e5;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.6rem;
  text-decoration: underline;

  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-top: 0.5rem;
  }
`;

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Error al iniciar sesión");
      } else if (data.token && data.user) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        setError("Respuesta inesperada del servidor.");
      }
    } catch (err) {
      setError("Error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SeoHelmet
        title="Iniciar sesión | Rutas CDMX"
        description="Accede a tu cuenta en la plataforma colaborativa de rutas de transporte en la Ciudad de México."
      />
      <LoginWrapper>
        <Title>Iniciar sesión</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Ingresando..." : "Entrar"}
          </Button>
        </form>
        <SecondaryButton onClick={() => navigate("/register")}>
          ¿No tienes cuenta? Regístrate
        </SecondaryButton>
        {error && <div style={{color: "#e11d48", marginTop: "1rem"}}>{error}</div>}
      </LoginWrapper>
    </>
  );
}

export default Login;