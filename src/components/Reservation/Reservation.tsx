import "./Reservation.scss";
import React, { useState } from "react";

function Reservation() {
    const [form, setForm] = useState({
        lastName: "",
        firstName: "",
        date: "",
        hour: "",
        chair: "1",
        message: ""
    });

    // Détermine si la date est un week-end
    const isWeekend = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDay(); // 0 = dimanche, 6 = samedi
        return day === 0 || day === 6;
    };

    // Récupère les limites d'heures en fonction de la date
    const getHourLimits = (date: string) => {
        if (isWeekend(date)) {
            return { min: "11:00", max: "00:00" };
        }
        return { min: "11:00", max: "23:30" };
    };

    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [id]: value,
        }));
    };
    

    const hourLimits = getHourLimits(form.date);

    return (
        <div className="reservation">
            <h3>Réserver chez vous</h3>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Formulaire soumis : ", form);
                }}
            >
                <label htmlFor="lastName">
                    Nom
                    <input
                        type="text"
                        id="lastName"
                        value={form.lastName}
                        onChange={handleFormChange}
                    />
                </label>

                <label htmlFor="firstName">
                    Prénom
                    <input
                        type="text"
                        id="firstName"
                        value={form.firstName}
                        onChange={handleFormChange}
                    />
                </label>

                <label htmlFor="chair">
                    Nombre de couverts
                    <select
                        id="chair"
                        value={form.chair}
                        onChange={handleFormChange}
                    >
                        {Array.from({ length: 9 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="date">
                    Date
                    <input
                        type="date"
                        id="date"
                        value={form.date}
                        onChange={handleFormChange}
                    />
                </label>

                <label htmlFor="hour">
                    Heure
                    <input
                        type="time"
                        id="hour"
                        value={form.hour}
                        min={hourLimits.min}
                        max={hourLimits.max}
                        onChange={handleFormChange}
                        disabled={!form.date} // Désactive le champ si la date n'est pas sélectionnée
                    />
                </label>

                <label htmlFor="message">
                    Remarque
                    <textarea
                        id="message"
                        value={form.message}
                        onChange={handleFormChange}
                    />
                </label>

                <input type="submit" value="Réserver" />
            </form>

            <div className="form-recap">
                <h3>Votre réservation :</h3>
                <p>
                    Votre nom : <br />
                    <span>{form.lastName}</span> <span>{form.firstName}</span>
                </p>
                <p>
                    {form.date}
                    <br />
                    {form.hour}
                </p>
                <p>Couverts pour {form.chair}</p>
                <p>
                    Observation : <br />
                    <span>{form.message}</span>
                </p>
            </div>
        </div>
    );
}

export default Reservation;
