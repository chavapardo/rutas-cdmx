import React from "react";
import styled from "styled-components";
import CreateRouteForm from "../components/CreateRouteForm";
import { SeoHelmet } from "../components/SeoHelmet";

// Estilos responsivos para el wrapper del main
const MainWrapper = styled.main`
  max-width: 540px;
  margin: 40px auto 0 auto;
  padding: 2rem 2.2rem 2rem 2.2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 24px rgba(80,80,120,0.08);

  @media (max-width: 700px) {
    max-width: 98vw;
    margin: 18px 4vw 0 4vw;
    padding: 1.1rem 0.7rem 1.2rem 0.7rem;
    border-radius: 8px;
    box-shadow: 0 1px 10px rgba(80,80,120,0.08);
  }
`;

const Title = styled.h1`
  color: #4f46e5;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.7rem;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 1.25rem;
    margin-bottom: 1.1rem;
  }
`;

export default function CrearRutaPage() {
  return (
    <>
      <SeoHelmet
        title="Crear Ruta | Rutas CDMX"
        description="Agrega una nueva ruta y ayuda a la comunidad a encontrar mejores opciones de transporte en la Ciudad de México."
      />
      <MainWrapper>
        <Title>Crear nueva ruta</Title>
        <CreateRouteForm />
      </MainWrapper>
    </>
  );
}