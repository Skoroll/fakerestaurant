import React, { useRef, useState, useEffect } from "react";
import Reservation from "../../Reservation/Reservation";
import Modal from "../../Modal/Modal";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const onMenu = useRef<HTMLLIElement>(null);

  // Fonction pour changer l'état du menu
  const handleMenu = (e: React.MouseEvent) => {
    if (onMenu.current && onMenu.current.contains(e.target as Node)) {
      setMenuOpen(!menuOpen);
    }
  };

  // Fonction pour ouvrir/fermer la modale
  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  // Fonction pour fermer le menu si clic en dehors
  const handleClickOutside = (e: MouseEvent) => {
    if (onMenu.current && !onMenu.current.contains(e.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav">
      {/* Affichage conditionnel de la modale */}
      {modalOpen && (
        <Modal onClose={toggleModal}>
          <Reservation />
        </Modal>
      )}

      <ul className="nav__ul">
        <li
          className="nav-btn"
          ref={onMenu}
          onClick={handleMenu}
        >
          Menu
        </li>
        <li
          className="nav-btn"
          onClick={toggleModal}
        >
          Réservation
        </li>
        <li className="nav-btn">Contact</li>
      </ul>

      {/* Menu déroulant conditionnel */}
      {menuOpen && (
        <div>
          <ul className="nav__menu-ul">
            <li className="nav-btn">Boissons</li>
            <li className="nav-btn">Entrée</li>
            <li className="nav-btn">Nos plats</li>
            <li className="nav-btn">Poissons</li>
            <li className="nav-btn">Grillades</li>
            <li className="nav-btn">Desserts</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
