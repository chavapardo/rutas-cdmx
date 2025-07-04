import React from "react";
import styled from "styled-components";
import { HomeBanner } from "../components/HomeBanner";
import { GoogleMapDemo } from "../components/GoogleMapDemo";
import { SeoHelmet } from "../components/SeoHelmet";

const SectionBg = styled.section`
  background: #e0e7ff;
  width: 100%;
  padding: 2.5rem 0 2rem 0;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 2rem 0 1.5rem 0;
  }
  @media (max-width: 600px) {
    padding: 1rem 0 1rem 0;
  }
`;

const HeroMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #22223b;
  font-weight: 600;
  margin-bottom: 1.6rem;
  padding: 0 1.5rem;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled.h3`
  margin-top: 2rem;
  text-align: center;
  color: #4f46e5;
  font-size: 1.3rem;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 1.08rem;
    margin-top: 1rem;
  }
`;

const RecommendedRoutes = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 500px;
  margin: 16px auto 0 auto;

  @media (max-width: 600px) {
    max-width: 98vw;
    margin-top: 8px;
    padding: 0 2vw;
  }
`;

const RouteItem = styled.li`
  background: #fff;
  color: #22223b;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 1rem 1.4rem;
  font-size: 1.08rem;
  font-weight: 500;
  box-shadow: 0 1px 8px rgba(80,80,120,0.04);
  display: flex;
  align-items: center;
  gap: 10px;
  transition: box-shadow .2s;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.9rem 0.7rem;
    gap: 6px;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }
`;

const RouteIcon = styled.span`
  font-size: 1.4rem;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const MapContainer = styled.div`
  margin: 2rem auto;
  max-width: 800px;

  @media (max-width: 900px) {
    max-width: 98vw;
    margin: 1.2rem auto;
  }
  @media (max-width: 600px) {
    margin: 1rem auto 1.2rem auto;
    padding: 0 0.5rem;
    max-width: 100vw;
    box-sizing: border-box;
  }
`;

export const Home: React.FC = () => (
  <>
    <SeoHelmet
      title="Inicio | Rutas CDMX"
      description="Encuentra, comparte y califica rutas alternativas de transporte público en la Ciudad de México. La mejor app colaborativa para moverse por la CDMX."
    />

    <HomeBanner />

    <SectionBg>
      <HeroMessage>
        ¡La mejor página para encontrar rutas rápidas y seguras en CDMX!
      </HeroMessage>

      <SectionTitle>Rutas recomendadas</SectionTitle>
      <RecommendedRoutes>
        <RouteItem>
          <RouteIcon>🚇</RouteIcon> Tacuba <span>→</span> Universidad
        </RouteItem>
        <RouteItem>
          <RouteIcon>🚇</RouteIcon> Indios Verdes <span>→</span> Centro Médico
        </RouteItem>
        <RouteItem>
          <RouteIcon>🚇</RouteIcon> Observatorio <span>→</span> Pantitlán
        </RouteItem>
        <RouteItem>
          <RouteIcon>🚌</RouteIcon> Chapultepec <span>→</span> Perisur (Metrobus)
        </RouteItem>
        <RouteItem>
          <RouteIcon>🚍</RouteIcon> Toreo <span>→</span> Politécnico (RTP)
        </RouteItem>
      </RecommendedRoutes>
    </SectionBg>

    <MapContainer>
      <GoogleMapDemo />
    </MapContainer>
  </>
);