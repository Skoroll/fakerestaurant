import "./Reservation.scss";
import React, { useState } from "react";

function Reservation() {
    // État pour stocker les données du formulaire
    const [form, setForm] = useState({
        lastName: "",
        firstName: "",
        date: "",
        hour: "",
        chair: "1", // Valeur par défaut pour le champ chair
    });

    // Gestionnaire de modification des champs du formulaire
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [id]: value,
        }));
    };

    return (
        <div className="reservation">
            <h3>Réserver chez vous</h3>

            <form
                onSubmit={(e) => {
                    e.preventDefault(); // Empêche le rechargement de la page
                    console.log("Formulaire soumis : ", form);
                }}
            >
                <label htmlFor="lastName">
                    Nom
                    <input
                        type="text"
                        id="lastName"
                        value={form.lastName}
                        onChange={handleFormChange} // Met à jour l'état
                    />
                </label>

                <label htmlFor="firstName">
                    Prénom
                    <input
                        type="text"
                        id="firstName"
                        value={form.firstName}
                        onChange={handleFormChange} // Met à jour l'état
                    />
                </label>

                <label htmlFor="chair">
                    Nombre de couverts
                    <select
                        id="chair"
                        value={form.chair}
                        onChange={handleFormChange} // Met à jour l'état
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </label>

                <label htmlFor="date">
                    Date
                    <input
                        type="date"
                        id="date"
                        value={form.date}
                        onChange={handleFormChange} // Met à jour l'état
                    />
                </label>

                <label htmlFor="hour">
                    Heure
                    <input
                        type="time"
                        id="hour"
                        value={form.hour}
                        onChange={handleFormChange} // Met à jour l'état
                    />
                </label>

                <input type="submit" value="Réserver" />
            </form>
            <div className="form-recap">
                <h3>Votre réservation :</h3>
                <p>
                    <span>{form.lastName}</span> <span>{form.firstName}</span>
                </p>
                <p>
                    {form.date} {form.hour}
                </p>
                <p>Couverts pour {form.chair}</p>
            </div>
        </div>
    );
}

export default Reservation;
