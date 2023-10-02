import React from "react";
import AboutUs from '../../components/AboutUs'
import Footer from '../../components/Footer'
import Header from "../../components/Header/index"
import MentalHealthArticles from "../../components/MentalHealthArticles"
import Services from "../../components/Services"
import NavBarApis from "../NavBarApis";

export const HomeApisComponent = () => {
    return (
      <div className="mainContainer_PantallaPrincipal">
      
      <NavBarApis />

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
              <button className="botn-buscarizquierda">
                <div className="texto-comprarizquierda">Buscar</div>
              </button>
            </div>
          </div>
        </div>

        <img className="parte-derecha" alt="Parte derecha" src="https://c.animaapp.com/efZQeSOj/img/parte-derecha.svg" />





      </div>

      <MentalHealthArticles />
      <Services />
      <Footer />



    </div>
    );
};

export default HomeApisComponent