import React from "react";

export const TarjetaServicio = () => {
    return (
    <div className="tagservicios">
          <div className="divservicios">
            <div className="div-2servicios">
              <div className="text-wrapper-2servicios">Inglés</div>
              <div className="div-wrapperservicios">
                <div className="text-wrapper-3servicios">Presencial</div>
              </div>
              <div className="div-wrapperservicios">
                <div className="text-wrapper-3servicios">Online</div>
              </div>
              <div className="tag-precioservicios">
                <div className="text-wrapper-3servicios">$5000/h</div>
              </div>
            </div>
            <p className="pservicios">
              Estudiante de ingeniería informática, apasionada por la ciencia desde pequeña. Me encuentro dando clases de
              matemática hace 2 años. No dudes en contactarme!
            </p>
          </div>
          <div className="div-3servicios">
            <button className="botn-modificarservicios">
              <div className="placeholder-wrapperservicios">
                <div className="placeholderservicios">Modificar Servicio</div>
              </div>
            </button>
            <button className="botn-modificarservicios">
              <div className="placeholder-wrapperservicios">
                <div className="placeholder-2servicios">Eliminar Servicio</div>
              </div>
            </button>
          </div>
        </div>
  
    );
};

export default TarjetaServicio