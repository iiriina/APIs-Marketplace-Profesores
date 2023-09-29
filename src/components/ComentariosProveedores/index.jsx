import React from "react";
import ComentarioUsuario from "../ComentarioUsuario";
export const ComentariosProveedores = () => {
    return (
    <div className="framepagcomentarios">
        {/* contenido de la pagina */}
      <div className="text-wrapperpagcomentarios">Mis Comentarios</div>
      <div className="tagpagcomentarios">
        <div className="divpagcomentarios">
          <div className="div-wrapperpagcomentarios">
            <div className="text-wrapper-2pagcomentarios">María Ríos</div>
          </div>
          <p className="ppagcomentarios">Hola! Me encantó la clase, la verdad excelente profe, no tuve inconvenientes.</p>
        </div>
        <div className="div-2pagcomentarios">
          <div className="botn-modificarpagcomentarios">
            <div className="placeholder-wrapperpagcomentarios">
              <div className="placeholderpagcomentarios">Aceptar Comentario</div>
            </div>
          </div>
          <div className="placeholder-wrapperpagcomentarios">
            <div className="placeholder-2pagcomentarios">Eliminar Servicio</div>
          </div>
        </div>
      </div>
    </div>
        

    );
};

export default ComentariosProveedores