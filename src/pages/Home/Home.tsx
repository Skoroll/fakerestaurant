// src/pages/Home/Home.tsx
import React from "react";
import Menu from "../../components/Menu/Menu";
import Carrousel from "../../components/Carrousel/Carrousel";
import Info from "../../components/Info/Info";
import Event from "../../components/Event/Event";
import ImageGallery from "../../components/ImageGallery/ImageGallery"; // Assurez-vous d'importer correctement

function Home() {
  const images = ImageGallery(); // Récupère les images

  return (
    <div className="home">
      <h1>Bienvenue au Aegean Sea</h1>
      <h2>Votre restaurant grec près de chez vous</h2>
      
      {/* Intégration du Carrousel avec les images */}
      <Carrousel images={images} />
      <h2>Evenements</h2>
      <Event />
      {/* Menu */}
      <Menu />

      <Info />
    </div>
  );
}

export default Home;
