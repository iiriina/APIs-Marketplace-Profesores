import urlWebServices from '../controller/webServices.js';

export const crearContratacion = async function (datosContratacion) {
  // URL de los servicios web
  let url = urlWebServices.crearContratacion;
  
  if (!datosContratacion.nombre_estudiante || !datosContratacion.telefono || !datosContratacion.email || !datosContratacion.horarios || !datosContratacion.motivos){
    return { rdo: 1, mensaje: "No se pudo hacer el comentario, faltan datos." };
  }

    // Crear un objeto URLSearchParams para los datos del formulario
    const formData = new URLSearchParams();
    formData.append('id_usuario', datosContratacion.id_usuario); 
    formData.append('nombre_estudiante', datosContratacion.nombre_estudiante);
    formData.append('telefono', datosContratacion.telefono);
    formData.append('email', datosContratacion.email);
    formData.append('horarios', datosContratacion.horarios);
    formData.append('motivos', datosContratacion.motivos);
  console.log("le estoy mandando al back esto:", formData);
  try {
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Origin': 'http://localhost:5173',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData,
    });

    let rdo = response.status;
    let data = await response.json();

    // Manejo de respuestas
    switch (rdo) {
      case 201:
        return { rdo: 0, mensaje: "Se ha enviado la solicitud." }; // correcto

      case 400:
        return { rdo: 1, mensaje: "Error creando la solicitud." };

      default:
        return { rdo: 1, mensaje: "Error creando la solicitud" };
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return { rdo: 1, mensaje: "Error creando la solicitud" };
  }
};
