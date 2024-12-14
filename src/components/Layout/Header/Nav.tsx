import React, { useRef, useState, useEffect } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const onMenu = useRef<HTMLLIElement>(null); // Utilisez HTMLLIElement ici car on l'applique à un <li>

  // Fonction pour changer l'état du menu lorsque l'utilisateur clique sur le bouton
  const handleMenu = (e: React.MouseEvent) => {
    // Vérifier si l'événement a été déclenché par le bouton "Menu"
    if (onMenu.current && onMenu.current.contains(e.target as Node)) {
      setMenuOpen(!menuOpen);
    }
  };

  // Fonction pour fermer le menu si on clique en dehors de celui-ci
  const handleClickOutside = (e: MouseEvent) => {
    if (onMenu.current && !onMenu.current.contains(e.target as Node)) {
      setMenuOpen(false);  // Fermer le menu si le clic est en dehors
    }
  };

  // Ajout d'un écouteur d'événements pour détecter un clic en dehors du menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li
          className="nav-btn"
          ref={onMenu} // Référence sur le bouton "Menu" pour détecter les clics dessus
          onClick={handleMenu}
        >
          Menu
        </li>
        <li className="nav-btn">Réservation</li>
        <li className="nav-btn">Contact</li>
      </ul>

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
