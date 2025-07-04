import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

export const GoogleMapDemo = () => (
  <LoadScript googleMapsApiKey={apiKey!}>
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={{ lat: 19.432608, lng: -99.133209 }} // CDMX
      zoom={11}
    />
  </LoadScript>
);