import React from "react";

export const ComentarioUsuario = () => {
    return (
    <div className="tagpagcomentarios">
        <div className="divpagcomentarios">
          <div className="div-wrapperpagcomentarios">
            <div className="text-wrapper-2pagcomentarios">María Ríos</div>
          </div>
          <p className="ppagcomentarios">Hola! Me encantó la clase, la verdad excelente profe, no tuve inconvenientes.</p>
        </div>
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
    </div>
    );
};

export default ComentarioUsuario