import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Déclaration de l'icône du marqueur en dehors du composant
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // URL publique pour l'icône
  iconSize: [25, 41], // Taille de l'icône
  iconAnchor: [12, 41], // Point d'ancrage de l'icône
  popupAnchor: [1, -34], // Position du popup
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', // URL publique pour l'ombre
  shadowSize: [41, 41], // Taille de l'ombre
});

const Map = () => {
  const [position] = useState<[number, number]>([48.839646, 2.337202]); // Coordonnées de la carte

  const MapSetup = () => {
    const map = useMap();
    useEffect(() => {
      map.setView(position, 13); // Définit le centre et le zoom
    }, [position, map]);

    return null; // Ce composant ne rend rien
  };

  return (
    <MapContainer style={{ height: "500px", width: "100%" }} center={position} zoom={13}>
      <MapSetup /> {/* Utilisation de MapSetup pour configurer la vue */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL correcte pour les tuiles
      />
      <Marker position={position} icon={markerIcon}> {/* Application de l'icône */}
        <Popup>A pretty marker</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
