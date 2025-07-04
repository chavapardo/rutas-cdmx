import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 19.4326,  // Latitud de la CDMX
  lng: -99.1332  // Longitud de la CDMX
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
      {/* Puedes agregar marcadores aquí */}
    </GoogleMap>
  );
}