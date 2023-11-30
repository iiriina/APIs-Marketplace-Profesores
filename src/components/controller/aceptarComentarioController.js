import urlWebServices from '../controller/webServices.js';

export const aceptarComentario = async function (datosComentario) {
  // URL de los servicios web
  let url = urlWebServices.aceptarComentario;
  
  const token = localStorage.token;

  if (!token) {
    console.warn('No hay token almacenado. No se realizará la operación de eliminar servicio.');
    return [];
  }

  if (!datosComentario.id_servicio || !datosComentario.id_comentario){
    return { rdo: 1, mensaje: "No se pudo eliminar el comentario." };
  }

    // Crear un objeto URLSearchParams para los datos del formulario
    const formData = new URLSearchParams();
    formData.append('id_servicio', datosComentario.id_servicio); 
    formData.append('id_comentario', datosComentario.id_comentario);
    formData.append('id_usuario', localStorage.id); //el usuario es el que tengo almacenado en le local storage

  console.log("le estoy mandando al back esto:", formData);

  try {
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Origin': 'http://localhost:5173',
        'x-access-token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData,
    });

    let rdo = response.status;
    let data = await response.json();

    // Manejo de respuestas
    switch (rdo) {
      case 200:
        return { rdo: 0, mensaje: data.message }; // correcto

      case 400:
        return { rdo: 1, mensaje: data.message };

      default:
        return { rdo: 1, mensaje: data.message };
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return { rdo: 1, mensaje: "Error intentando aceptar comentario." };
  }
};
