import React from "react";
import ComentarioUsuario from "../ComentarioUsuario";

export const ComentariosProveedores = () => {
    return (
    <div className="framepagcomentarios">
        <div className="text-wrapperpagcomentarios">Mis Comentarios</div>
        <ComentarioUsuario />
        <ComentarioUsuario />
        <ComentarioUsuario />
        <ComentarioUsuario />
    </div>
    );
};

export default ComentariosProveedores;