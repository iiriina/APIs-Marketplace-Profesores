import React from "react";

export const NavBarApis = () => {
    return (
    <div className="header">
        <img className="logo" alt="Logo" src="https://c.animaapp.com/p8N1GDGe/img/logo.svg" />
        <div className="menu">
        <button className="text-wrapper">Inicio</button>
        <button className="text-wrapper">Servicios</button>
        <button className="text-wrapper">About Us</button>
        </div>
        <div className="header-button">
            <button className="contact-button">
                <div className="overlap-group">
                <div className="contact-us">Log In</div>
                </div>
            </button>
        </div>
    </div>
    );
};

export default NavBarApis