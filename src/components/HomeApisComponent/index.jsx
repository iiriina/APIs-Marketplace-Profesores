import React from "react";

export const HomeApisComponent = () => {
    return (
      <div className="mainContainer_PantallaPrincipal">
        <div className="header">
        <img className="logo" alt="Logo" src="https://c.animaapp.com/p8N1GDGe/img/logo.svg" />
        <div className="menu">
          <div className="text-wrapper">Inicio</div>
          <div className="text-wrapper">Servicios</div>
          <div className="text-wrapper">About Us</div>
        </div>
        <div className="header-button">
          <div className="contact-button">
            <div className="overlap-group">
              <div className="contact-us">Log In</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default HomeApisComponent