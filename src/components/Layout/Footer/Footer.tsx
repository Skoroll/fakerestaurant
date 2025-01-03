import React from "react";
import Modal from "../../Modal/Modal";
import Reservation from "../../Reservation/Reservation";
import { useState } from "react";
import "./Footer.scss";

const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);

    // Fonction pour ouvrir/fermer la modale
    const toggleModal = () => {
        setModalOpen((prevState) => !prevState);
    };

    return (
        <footer className="footer">
            <button onClick={toggleModal}>Réserver</button>
            {modalOpen && (
                <Modal onClose={toggleModal}>
                    <Reservation />
                </Modal>
            )}

            <div className="footer__section">
            <div className="footer__section--copyright">
                <p>© 2024 Greek Taverna - Crée par Skorol</p>
            </div>
            <div className="footer__section--mentions">
                <p><span>Mention Légale</span>, <span>CGU</span>,<span>Politique de confidentialité</span> </p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;