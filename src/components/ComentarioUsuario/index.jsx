import React from "react";
import { aceptarComentario } from "../controller/aceptarComentarioController";
import Snackbar from '@mui/material/Snackbar';
import { useState } from "react";
import { eliminarComentario } from "../controller/borrarComentarioController";

export const ComentarioUsuario = ({ id_servicio, id_comentario, nombre, calificacion, comentario }) => {
  
  const [showSnackbar, setShowSnackbar] = useState(false);

  const [showSnackbar2, setShowSnackbar2] = useState(false);

  const handleAceptarComentario = async () => {

    const datosComentario = {
      id_servicio: id_servicio,
      id_comentario: id_comentario,
    };

    const resultado = await aceptarComentario(datosComentario);
  
    if (resultado.rdo === 0) {
      // Manejar la aceptación exitosa del comentario
      console.log('Comentario aceptado exitosamente:', resultado.mensaje);

      setShowSnackbar(true);

      // Temporizador para ocultar el Snackbar después de 4000 ms
      setTimeout(() => {
        setShowSnackbar(false);
      }, 4000);

    } else {
      // Manejar el error al aceptar el comentario
      console.error('Error al aceptar el comentario:', resultado.mensaje);
    }
  };
  
  const handleEliminarComentario = async () => {
    // Llamar a la función para eliminar el comentario desde la base de datos
    try {
      const resultado = await eliminarComentario(id_comentario, id_servicio);
      
      if (resultado.rdo === 0) {
        console.log('Comentario eliminado exitosamente:', resultado.mensaje);
        // Puedes mostrar un mensaje de éxito si lo deseas

        setShowSnackbar2(true);

        // Temporizador para ocultar el Snackbar después de 4000 ms
        setTimeout(() => {
          setShowSnackbar2(false);
        }, 4000);
  
      } else {
        console.error('Error al eliminar el comentario:', resultado.mensaje);
        // Puedes manejar el error de eliminación según tus necesidades
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

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
          <button className="placeholder-wrapperpagcomentarios" onClick={handleAceptarComentario}>
              <div className="placeholderpagcomentarios">Aceptar Comentario</div>
            </button>
          </div>
          <button className="placeholder-wrapperpagcomentarios" onClick={handleEliminarComentario}>
            <div className="placeholder-2pagcomentarios">Eliminar Comentario</div>
          </button>

          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={showSnackbar}
            autoHideDuration={4000}
            onClose={() => setShowSnackbar(false)}
            message="Se ha aceptado el comentario."
          />

          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={showSnackbar2}
            autoHideDuration={4000}
            onClose={() => setShowSnackbar2(false)}
            message="Se ha eliminado el comentario."
          />

        </div>
      ) : null}
    </div>
  );
};

export default ComentarioUsuario;
