import React from "react";

export const TarjetaServicio = () => {
    return (
        <div className="tagservicio">
        <div className="frameservicio">
          <div className="divservicio">
            <div className="text-wrapperservicio">Inglés</div>
            <div className="div-wrapperservicio">
              <div className="text-wrapper-2servicio">Presencial</div>
            </div>
            <div className="div-wrapperservicio">
              <div className="text-wrapper-2servicio">Online</div>
            </div>
            <div className="tag-precioservicio">
              <div className="text-wrapper-2servicio">$5000/h</div>
            </div>
          </div>
          <p className="pservicio">
            Estudiante de ingeniería informática, apasionada por la ciencia desde pequeña. Me encuentro dando clases de
            matemática hace 2 años. No dudes en contactarme!
          </p>
        </div>
        <div className="frame-2servicio">
          <div className="botn-modificarservicio">
            <div className="placeholder-wrapperservicio">
              <div className="placeholderservicio">Modificar Servicio</div>
            </div>
          </div>
          <div className="placeholder-wrapperservicio">
            <div className="placeholder-2servicio">Eliminar Servicio</div>
          </div>
        </div>
      </div>
  
    );
};

export default TarjetaServicio