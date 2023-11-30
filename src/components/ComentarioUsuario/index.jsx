import React from "react";

export const ComentarioUsuario = ({ id_servicio, id_usuario, nombre, calificacion, comentario }) => {
  return (
    <div className="tagpagcomentarios">
      <div className="divpagcomentarios">
        <div className="div-wrapperpagcomentarios">
          {nombre && <div className="text-wrapper-2pagcomentarios">{nombre}.</div>}
          {calificacion && <div className="text-wrapper-2pagcomentarios"> ⭐ {calificacion} ⭐</div>}
        </div>
        {comentario && <p className="ppagcomentarios">{comentario}</p>}
      </div>
      {nombre || calificacion || comentario ? (
        <div className="div-2pagcomentarios">
          <div className="botn-modificarpagcomentarios">
            <button className="placeholder-wrapperpagcomentarios">
              <div className="placeholderpagcomentarios">Aceptar Comentario</div>
            </button>
          </div>
          <button className="placeholder-wrapperpagcomentarios">
            <div className="placeholder-2pagcomentarios">Eliminar Comentario</div>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ComentarioUsuario;
