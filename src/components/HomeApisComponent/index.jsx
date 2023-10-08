import React from "react";
import Footer from '../../components/Footer'
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

        <p className="titulo_info_alumnos"> Servicios para Estudiantes:
        </p>

        <div className="framealumnos">
      <div className="divalumnos">
        <img className="bookingalumnos" alt="Booking" src="https://c.animaapp.com/UebiKBfU/img/booking-1-2@2x.png" />
        <div className="div-2alumnos">
          <div className="text-wrapperalumnos">Busca Clases</div>
          <p className="palumnos">Eligiendo entre una amplia variedad de temáticas, desde música hasta física cuántica.</p>
        </div>
      </div>
      <div className="divalumnos">
        <img className="bookingalumnos" alt="Booking" src="https://c.animaapp.com/UebiKBfU/img/booking-1-2@2x.png" />
        <div className="div-3alumnos">
          <p className="text-wrapperalumnos">Mira la Información de los Cursos</p>
          <p className="palumnos">Sabrás tiempo, modalidad, duración, quién los dicta y qué contenidos tendrán.</p>
        </div>
      </div>
      <div className="divalumnos">
        <img className="bookingalumnos" alt="Booking" src="https://c.animaapp.com/UebiKBfU/img/booking-1-2@2x.png" />
        <div className="div-4alumnos">
          <div className="text-wrapperalumnos">Contactá</div>
          <p className="palumnos">
            Enviale un mensaje al profesional cuyo curso más te haya llamado la atención, y en la brevedad se comunicará
            con vos :)
          </p>
        </div>
      </div>
    </div>

    <p className="titulo_info_profesores"> Servicios para Profesores:
        </p>

    <div className="framealumnos">
      
      <div className="divalumnos">
        <img className="bookingalumnos" alt="Booking" src="https://c.animaapp.com/UebiKBfU/img/booking-1-2@2x.png" />
        <div className="div-2alumnos">
          <div className="text-wrapperalumnos">Agregá Tu Biografía</div>
          <p className="palumnos">Y contale a tus potenciales alumnos sobre tu background académico y habilidades.</p>
        </div>
      </div>
      <div className="divalumnos">
        <img className="bookingalumnos" alt="Booking" src="https://c.animaapp.com/UebiKBfU/img/booking-1-2@2x.png" />
        <div className="div-3alumnos">
          <p className="text-wrapperalumnos">Aprobá o Rechazá Comentarios</p>
          <p className="palumnos">Para agregarlos al perfil de tu servicio.</p>
        </div>
      </div>
      <div className="divalumnos">
        <img className="bookingalumnos" alt="Booking" src="https://c.animaapp.com/UebiKBfU/img/booking-1-2@2x.png" />
        <div className="div-4alumnos">
          <div className="text-wrapperalumnos">Agregá o Quitá Servicios</div>
          <p className="palumnos">
          Podrás subir los servicios sobre las clases que estés dispuesto a dar.
          </p>
        </div>
      </div>
    </div>
        <Footer />
      </div>
    );
};

export default HomeApisComponent;