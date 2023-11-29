import urlWebServices from '../controller/webServices.js';

export const hacerComentario = async function (datosComentario) {
  // URL de los servicios web
  let url = urlWebServices.hacerComentarioEnServicio;
  
  //ponemos anonimo si alguien deja una calificacion sin el nombre.
  //pueden poner calificacion y nombre y comentario, o calificacion y nombre, o calificacion y comentario
  //o comentario, pero tiene que haber o calificacion o comentario
  if (!datosComentario.calificacion && !datosComentario.comentario){
    return { rdo: 1, mensaje: "No se pudo hacer el comentario, faltan datos." };
  }

    // Crear un objeto URLSearchParams para los datos del formulario
    const formData = new URLSearchParams();
    formData.append('id_servicio', datosComentario.id_servicio);
    formData.append('id_usuario', datosComentario.id_usuario);
  
  if (datosComentario.nombre_estudiante){  
    formData.append('nombre_estudiante', datosComentario.nombre_estudiante);
  } else {
    formData.append('nombre_estudiante', 'Anónimo:');
  }

  if (datosComentario.comentario){
    formData.append('comentario', datosComentario.comentario);
  }

  if (datosComentario.calificacion){
    formData.append('calificacion', datosComentario.calificacion);
  }


  try {
    let response = await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Origin': 'http://localhost:5173',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData,
      // credentials: 'include' // Considera activar esto si manejas autenticación con cookies
    });

    let rdo = response.status;
    let data = await response.json();

    // Manejo de respuestas
    switch (rdo) {
      case 201:
        return { rdo: 0, mensaje: "Se ha creado el comentario." }; // correcto

      case 400:
        return { rdo: 1, mensaje: "Error creando el comentario." };

      default:
        return { rdo: 1, mensaje: "Error creando el comentario" };
    }
  } catch (error) {
    console.error('Error en la solicitud de crear comentario:', error);
    return { rdo: 1, mensaje: "Error creando el comentario" };
  }
};
