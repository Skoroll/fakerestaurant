import React, { useState } from "react";
import "./Carrousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importez FontAwesomeIcon
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Importez les icônes

interface CarrouselProps {
  images: string[]; // Tableau d'URL d'images
}

const Carrousel: React.FC<CarrouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>Aucune image disponible pour le carrousel.</div>;
  }

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <div className="carrousel">
      <button className="carrousel__btn--prev" onClick={prevSlide} aria-label="Image précédente">
        <FontAwesomeIcon icon={faArrowLeft} /> {/* Utilisez FontAwesomeIcon avec l'icône faArrowLeft */}
      </button>
      <img
        className="carrousel__image"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <button className="carrousel__btn--next" onClick={nextSlide} aria-label="Image suivante">
        <FontAwesomeIcon icon={faArrowRight} /> {/* Utilisez FontAwesomeIcon avec l'icône faArrowRight */}
      </button>
    </div>
  );
};

export default Carrousel;
