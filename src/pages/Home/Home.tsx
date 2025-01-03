// src/pages/Home/Home.tsx
import React from "react";
import Menu from "../../components/Menu/Menu";
import Carrousel from "../../components/Carrousel/Carrousel";
import Info from "../../components/Info/Info";
import Event from "../../components/Event/Event";
import Map from "../../components/Map/Map";
import ImageGallery from "../../components/ImageGallery/ImageGallery"; // Assurez-vous d'importer correctement
import "./Home.scss"
function Home() {
  const images = ImageGallery(); // Récupère les images

  return (
    <div className="home">
      <div className="home__group">
        <div className="home__group--bg">
          <h1>Bienvenue au Greek Taverna</h1>
          <h2  style={{ textAlign: "center" }}>Votre restaurant grec près de chez vous</h2>
        </div>
      {/* Intégration du Carrousel avec les images */}
      <Carrousel images={images} />
      </div>
      <div className="home__events">
        <h2 className="home__events--title">Événements</h2>
        <Event />
      </div>
      {/* Menu */}
      <Menu />

      <div className="home__info">
        <Info />
        <Map />
      </div>
    </div>
  );
}

export default Home;
