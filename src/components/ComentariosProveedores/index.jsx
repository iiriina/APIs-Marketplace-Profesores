import React, { useState, useEffect } from "react";
import ComentarioUsuario from "../ComentarioUsuario";
import { mostrarComentariosPendientes } from "../controller/mostrarComentariosPendientesController";

const ComentariosProveedores = () => {
  const [comentarios, setComentarios] = useState(null);

  useEffect(() => {
    const fetchComentarios = async () => {
      try {

        const response = await mostrarComentariosPendientes();
        setComentarios(response.comentariosPendientes); // Actualiza con la propiedad correcta
        console.log("recibo esto del backend en el front:", comentarios);
      } catch (error) {
        console.error("Error al obtener comentarios:", error.message);
        setComentarios([]); // En caso de error, establece comentarios en una matriz vacía
      }
    };

    fetchComentarios();
  }, []);

  return (
    <div className="framepagcomentarios">
      <div className="text-wrapperpagcomentarios">Mis Comentarios</div>
      {comentarios === null ? (
        <p className="cargandoo">Cargando...</p>
      ) : comentarios.length === 0 ? (
        <p className="no_hay">No tenes comentarios pendientes 🩷</p>
      ) : (
        comentarios.map((comentario) => (
          <ComentarioUsuario
            key={comentario._id} 
            id_servicio={comentario.id_servicio} 
            id_usuario={comentario.id_usuario} 
            nombre={comentario.nombre_estudiante}
            calificacion={comentario.calificacion || null}
            comentario={comentario.comentario || null}
          />
        ))
      )}
    </div>
  );
};

export default ComentariosProveedores;
