import React, { useState } from "react";
import styled from "styled-components";

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 12px rgba(80,80,120,0.08);
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 7px;
  border: 1px solid #b3b4cb;
  width: 100%;
  font-size: 1rem;
  outline: none;
  &:focus {
    border: 1.5px solid #4f46e5;
  }
`;

const Button = styled.button`
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
  &:hover {
    background: #3730a3;
  }
`;

const Result = styled.div`
  margin-top: 1.3rem;
  background: #e0e7ff;
  border-radius: 8px;
  padding: 1rem;
  color: #22223b;
  font-weight: 500;
  text-align: center;
`;

export const RouteSearch: React.FC = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    if (!from || !to) {
      setResult("Por favor ingresa ambos campos.");
    } else {
      setResult(`Buscando ruta de ${from} a ${to}...`);
    }
  };

  return (
    <SearchBox>
      <Input
        placeholder="Origen (ej. Tacuba)"
        value={from}
        onChange={e => setFrom(e.target.value)}
        aria-label="Origen"
      />
      <Input
        placeholder="Destino (ej. Universidad)"
        value={to}
        onChange={e => setTo(e.target.value)}
        aria-label="Destino"
      />
      <Button onClick={handleSearch}>Buscar ruta</Button>
      {result && <Result>{result}</Result>}
    </SearchBox>
  );
};