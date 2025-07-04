import React from "react";
import { Helmet } from "react-helmet";

type SeoHelmetProps = {
  title?: string;
  description?: string;
  keywords?: string;
};

export function SeoHelmet({
  title = "Rutas CDMX | Colaborativo",
  description = "Web app colaborativa para compartir rutas no oficiales de transporte en Ciudad de México.",
  keywords = "cdmx, rutas, transporte, colaborativo, metro, camión, combi, movilidad"
}: SeoHelmetProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta name="author" content="TuNombre o Equipo"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content="website"/>
      <meta property="og:locale" content="es_MX"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
    </Helmet>
  );
}