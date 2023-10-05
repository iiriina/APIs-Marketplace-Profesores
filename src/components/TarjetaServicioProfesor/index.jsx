import React from "react";

export const TarjetaServicioProfesor = () => {
    return (
        <div className="tag-profesorservicioprofesores">
        <div className="div-2servicioprofesores">
          <div className="nombreservicioprofesores">
            <img className="imagenservicioprofesores" alt="Imagen" src="https://c.animaapp.com/jt0Q7JA1/img/imagen.png" />
            <div className="nombre-y-tiposervicioprofesores">
              <div className="text-wrapper-3servicioprofesores">Juan Gomez</div>
              <div className="text-wrapper-4servicioprofesores">Presencial y Online</div>
            </div>
          </div>
          <div className="div-3servicioprofesores">
            <div className="calificacinservicioprofesores">
              <div className="overlap-groupservicioprofesores">
                <div className="valueservicioprofesores">4.6 (23)</div>
                <img className="starservicioprofesores" alt="Star" src="https://c.animaapp.com/jt0Q7JA1/img/star@2x.png" />
              </div>
            </div>
            <button className="botn-contactarservicioprofesores">
              <div className="text-wrapper-5servicioprofesores"
                onClick={() => {
                  window.location.href = '/perfil_servicio';
                }}
              >Contactar</div>
            </button>
          </div>
        </div>
        <p className="pservicioprofesores">Clases de Matemática y Física</p>
        <p className="text-wrapper-6servicioprofesores">
          Recibido en UBA. Brindo apoyo en clases de matemática de 1ro a 3er año del secundario. Tengo muchos años de
          experiencia en el sector. No dudes en contactarme.
        </p>
        <div className="div-4servicioprofesores">
          <div className="precioservicioprofesores">
            <div className="text-wrapper-7servicioprofesores">$5000/h</div>
          </div>
          <div className="div-5servicioprofesores">
            <button className="text-wrapper-8servicioprofesores"  
            onClick={() => {
              window.location.href = '/perfil_servicio';
            }}
            >
              Ver Perfil
              </button>
            <button className="text-wrapper-9servicioprofesores"
                        onClick={() => {
                          window.location.href = '/perfil_servicio';
                        }}
            >
              Ver Comentarios
              </button>
          </div>
        </div>
      </div>

    );
};

export default TarjetaServicioProfesor