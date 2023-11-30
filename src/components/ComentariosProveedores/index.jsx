
import React, { useState, useEffect } from "react";
import ComentarioUsuario from "../ComentarioUsuario";
import { mostrarComentariosPendientes } from "../controller/mostrarComentariosPendientesController";

const ComentariosProveedores = () => {
  const [comentarios, setComentarios] = useState(null);

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await mostrarComentariosPendientes();
        setComentarios(response.comentariosPendientes);
        console.log("Recibo esto del backend en el front:", comentarios);
      } catch (error) {
        console.error("Error al obtener comentarios:", error.message);
        setComentarios([]);
      }
    };

    // Llama a fetchComentarios al montar el componente
    fetchComentarios();

    // Configura un intervalo para llamar a fetchComentarios cada 10 segundos
    const intervalId = setInterval(() => {
      fetchComentarios();
    }, 10000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento del useEffect asegura que se ejecute solo una vez al montar el componente

  return (
    <div className="framepagcomentarios">
      <div className="text-wrapperpagcomentarios">Mis Comentarios</div>
      {comentarios === null ? (
        <p className="cargandoo">Cargando...</p>
      ) : comentarios.length === 0 ? (
        <p className="no_hay">No tienes comentarios pendientes 🩷</p>
      ) : (
        comentarios.map((comentario) => (
          <ComentarioUsuario
            key={comentario._id}
            id_comentario={comentario._id}
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
