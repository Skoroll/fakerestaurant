import React from "react";
import Nav from "./Nav";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <img src="/assets/logo/1cd7f3ff-2a55-4d6f-aa8b-207674f6764e-removebg-preview.png" alt="Logo" />

            <Nav />
        </header>
    );
};

export default Header;
