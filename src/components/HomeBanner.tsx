import React, { useState } from "react";
import styled from "styled-components";
import { ROUTES, Route } from "../data/routes";

const BannerContainer = styled.div`
  background: #4f46e5;
  color: #fff;
  padding: 2.5rem 1rem 2rem 1rem;
  text-align: center;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  max-width: 400px;
  margin: 1rem auto 0 auto;
`;

const Input = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 7px;
  border: none;
  width: 100%;
  font-size: 1rem;
  outline: none;
`;

const Button = styled.button`
  background: #fff;
  color: #4f46e5;
  border: none;
  border-radius: 7px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
  &:hover {
    background: #e0e7ff;
  }
`;

const ResultBox = styled.div`
  margin-top: 1.2rem;
  background: #e0e7ff;
  color: #22223b;
  border-radius: 8px;
  padding: 1rem;
  text-align: left;
`;

export const HomeBanner: React.FC = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [results, setResults] = useState<Route[] | null>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = () => {
    if (!from.trim() || !to.trim()) {
      setError("Por favor ingresa ambos campos.");
      setResults(null);
      return;
    }
    setError("");
    // Búsqueda sencilla: ignora mayúsculas/minúsculas y espacios
    const filtered = ROUTES.filter(
      route =>
        route.from.toLowerCase().trim() === from.toLowerCase().trim() &&
        route.to.toLowerCase().trim() === to.toLowerCase().trim()
    );
    setResults(filtered.length > 0 ? filtered : []);
  };

  return (
    <BannerContainer>
      <h1>Encuentra tu mejor ruta en CDMX</h1>
      <InputsContainer>
        <Input
          placeholder="Origen (ej. Tacuba)"
          value={from}
          onChange={e => setFrom(e.target.value)}
        />
        <Input
          placeholder="Destino (ej. Universidad)"
          value={to}
          onChange={e => setTo(e.target.value)}
        />
        <Button onClick={handleSearch}>Buscar ruta</Button>
      </InputsContainer>
      {error && <ResultBox>{error}</ResultBox>}
      {results && (
        <ResultBox>
          {results.length === 0
            ? "No se encontró una ruta directa para esa combinación."
            : results.map((route, idx) => (
                <div key={idx}>
                  <strong>
                    {route.icon} {route.from} → {route.to}
                  </strong>
                  <br />
                  {route.description}
                </div>
              ))}
        </ResultBox>
      )}
    </BannerContainer>
  );
};