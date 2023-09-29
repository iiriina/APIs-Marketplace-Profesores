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

          <div className="frame2">
          <div className="search-bar2">
            <div className="div2">
              <img
                className="rectngulo-base2"
                alt="Rectngulo base"
                src="https://c.animaapp.com/96Ej2rJT/img/rect-ngulo-base.png"
              />
              <div className="placeholder2">matemática, física, ...</div>
              <div className="lupa2">
                <img className="cono-lupa" alt="Cono lupa" src="https://c.animaapp.com/96Ej2rJT/img/-cono-lupa@2x.png" />
              </div>
            </div>
          </div>
          <div className="div-22">
            <div className="filtro-categora2">
              <div className="overlap-group2">
                <img className="img2" alt="Rectngulo base" src="https://c.animaapp.com/96Ej2rJT/img/rect-ngulo-base-4.svg" />
                <div className="text-wrapper2">Filtrar por Categoría</div>
              </div>
            </div>
            <div className="overlap-wrapper2">
              <div className="overlap-group2">
                <img
                  className="rectngulo-base-22"
                  alt="Rectngulo base"
                  src="https://c.animaapp.com/96Ej2rJT/img/rect-ngulo-base-3.svg"
                />
                <div className="text-wrapper2">Filtrar por Calificación</div>
              </div>
            </div>
            <div className="overlap-wrapper2">
              <div className="overlap-group2">
                <img
                  className="rectngulo-base-32"
                  alt="Rectngulo base"
                  src="https://c.animaapp.com/96Ej2rJT/img/rect-ngulo-base-2.svg"
                />
                <div className="text-wrapper2">Filtrar por Clase</div>
              </div>
            </div>
            <div className="overlap-group-wrapper2">
              <div className="overlap2">
                <img
                  className="rectngulo-base-42"
                  alt="Rectngulo base"
                  src="https://c.animaapp.com/96Ej2rJT/img/rect-ngulo-base-1.svg"
                />
                <div className="placeholder-22">Filtrar por Frecuencia</div>
              </div>
            </div>
          </div>
          <div className="div-32">
            <img
              className="la-educacin-que-se2"
              alt="La educacin que se"
              src="https://c.animaapp.com/96Ej2rJT/img/la-educaci-n-que-se-adapta-a-vos.png"
            />
            <p className="p2">Elegí entre miles de profesionales que te brindarán el conocimiento que estás buscando.</p>
            <div className="content2">
              <button className="button2">
                <div className="texto-comprar-wrapper2">
                  <div className="texto-comprar2">Buscar</div>
                </div>
              </button>
            </div>
          </div>
        </div>


        <div className="frame3">
          <div className="image3">
            <div className="group3">
              <img className="rectangle3" alt="Rectangle" src="https://c.animaapp.com/4099Tdyd/img/rectangle-8.png" />
              <img className="img3" alt="Rectangle" src="https://c.animaapp.com/4099Tdyd/img/rectangle-10.png" />
            </div>
            <div className="overlap-group-wrapper3">
              <div className="overlap-group3">
                <img
                  className="dotted-shape3"
                  alt="Dotted shape"
                  src="https://c.animaapp.com/4099Tdyd/img/dotted-shape@2x.png"
                />
                <img className="rectangle-23" alt="Rectangle" src="https://c.animaapp.com/4099Tdyd/img/rectangle-9.png" />
              </div>
            </div>
          </div>
      </div>

      </div>

      <MentalHealthArticles />
      <Services />
      <Footer />



    </div>
    );
};

export default HomeApisComponent