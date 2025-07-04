export interface Route {
  from: string;
  to: string;
  type: "metro" | "metrobus" | "rtp" | "otros";
  description: string;
  icon: string;
}

export const ROUTES: Route[] = [
  {
    from: "Tacuba",
    to: "Universidad",
    type: "metro",
    icon: "🚇",
    description: "Línea 3, sin transbordos. Tiempo estimado: 35 minutos."
  },
  {
    from: "Indios Verdes",
    to: "Centro Médico",
    type: "metro",
    icon: "🚇",
    description: "Línea 3 directo. Tiempo estimado: 25 minutos."
  },
  {
    from: "Observatorio",
    to: "Pantitlán",
    type: "metro",
    icon: "🚇",
    description: "Línea 1 directo. Tiempo estimado: 45 minutos."
  },
  {
    from: "Chapultepec",
    to: "Perisur",
    type: "metrobus",
    icon: "🚌",
    description: "Toma Metrobus Línea 1. Tiempo estimado: 50 minutos."
  },
  {
    from: "Toreo",
    to: "Politécnico",
    type: "rtp",
    icon: "🚍",
    description: "RTP directo. Tiempo estimado: 40 minutos."
  }
];