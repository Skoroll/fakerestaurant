import React, { useState } from "react";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Collapses.scss"

interface CollapsesProps {
    title: string;
    content: {
        id: number;
        name: string;
        price: string;
        description: string;
        content: string;
    }[];
}

const Collapses: FC<CollapsesProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={`collapse ${isOpen ? 'open ': ''}`}>
            <div className="collapse__heading" onClick={toggleCollapse}>
                <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} />
                <h3 className="collapse__heading--title">
                    {title}
                </h3>
            </div>
            {isOpen && (
                <div className="collapse__content">
                    {content.map((item, index) => (
                        <div key={`${title}-${item.id}-${index}`} className="menu-item">
                            <h4>{item.name} - {item.price}€</h4>
                            <p>{item.description}</p>
                            <small>Ingrédients : {item.content}</small>
                        </div>
                    ))}

                </div>
            )}
        </div>
    )
}

export default Collapses