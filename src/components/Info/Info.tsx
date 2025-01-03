
import "./Info.scss"
import Modal from "../Modal/Modal"
import Reservation from "../Reservation/Reservation"
import { useState } from "react";

function Info() {

  const [modalOpen, setModalOpen] = useState(false);
  // Fonction pour ouvrir/fermer la modale
  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <div className="info ">
      <div className="division">
        <h2>Horaires d'ouverture</h2>
        <div className="info__list">
          <div className="info__list--inside">
            <p className="opening-day">En semaine :</p>
            <ul className="info__list--ul">
              <li>midi : <span>11h - 14h30</span></li>
              <li>soir : <span>18h - 23h30</span></li>
            </ul>
          </div>

          <div className="info__list--inside">
            <p className="opening-day">Le week-end :</p>
            <ul className="info__list--ul">
              <li>midi : <span>11h - 15h30</span></li>
              <li>soir : <span>18h - 0h</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="division">
        <h2>Réservation</h2>
        <p className="about-reservation">Pour être sûr d'avoir une table lors de votre venue, pensez à réserver.</p>
        <button onClick={toggleModal}>Réserver</button>
        {modalOpen && (
          <Modal onClose={toggleModal}>
            <Reservation />
          </Modal>
        )}
      </div>
    </div>
  )
}

export default Info