import React from "react";
import AboutUs from '../../components/AboutUs'
import Footer from '../../components/Footer'
import Header from "../../components/Header/index"

import Services from "../../components/Services"
import NavBarApis from "../NavBarApis";
import ResponsiveAppBar from "../../components/NavBarMarketplace/index.jsx";

export const HomeApisComponent = () => {
    return (
      <div className="mainContainer_PantallaPrincipal">
        <ResponsiveAppBar />

        <div className="frameafuera">
          <div className="parte-izquierdaizquierda">
            <div className="frame-izquierdoizquierda">
              <div className="texto-inferiorizquierda">
                <img
                  className="la-educacin-que-seizquierda"
                  alt="La educacin que se"
                  src="https://c.animaapp.com/xVS1bkVf/img/la-educaci-n-que-se-adapta-a-vos.svg"
                />
                <p className="eleg-entre-miles-deizquierda">
                  Elegí entre miles de profesionales que <br />
                  te brindarán el conocimiento que estás buscando.
                </p>
                <button className="botn-buscarizquierda"              
                onClick={() => {
                window.location.href = '/buscar_servicios';
                    // Llama a la función onLogin cuando se hace clic en el botón "Iniciar Sesión"

                }}
                >
                  <div className="texto-comprarizquierda">Buscar</div>
                </button>
              </div>
            </div>
          </div>

          <img
            className="parte-derecha"
            alt="Parte derecha"
            src="https://c.animaapp.com/efZQeSOj/img/parte-derecha.svg"
          />
        </div>
        <Footer />
      </div>
    );
};

export default HomeApisComponent