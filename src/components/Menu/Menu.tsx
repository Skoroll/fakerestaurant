import React from "react";
import Collapses from "../Collapses/Collapses";
import DrinksList from "../../assets/Menu/Drinks.json";
import MainCoursesList from "../../assets/Menu/MainCourses.json";
import StarterList from "../../assets/Menu/Desserts.json";
import DessertsList from "../../assets/Menu/Desserts.json";
import FishList from "../../assets/Menu/Fish.json";
import GrillList from "../../assets/Menu/Grill.json";
import "./Menu.scss";

function Menu() {

    return (
        <div className="menu">
            <h2>Notre menu</h2>

            <Collapses

                title={'Boissons'}
                content={DrinksList}
            />

            <Collapses

                title={'Entrées'}
                content={StarterList}
            />
            <Collapses

                title={'Plats principaux'}
                content={MainCoursesList}
                />
            <Collapses

                title={'Grillades'}
                content={GrillList}
                />
            <Collapses

            title={'Poissons'}
            content={FishList}
            />            
<Collapses

title={'Desserts'}
content={DessertsList}
/>            
        </div>
    )
}

export default Menu