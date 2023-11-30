import urlWebServices from '../controller/webServices.js';

export const cambiarVisibilidadServicio = async (datosServicio) => {
  let url = urlWebServices.cambiarVisibilidadServicio;

  const token = localStorage.token;

  if (!token) {
    console.warn('No hay token almacenado. No se realizará la operación de cambiar visibilidad servicio.');
    return [];
  }

  if (!datosServicio._id || !datosServicio.visibilidad){
    return { rdo: 1, mensaje: "No se pudo cambiar la visibilidad." };
  }

    // Crear un objeto URLSearchParams para los datos
    const formData = new URLSearchParams();
    formData.append('_id', datosServicio._id); 
    formData.append('visibilidad', datosServicio.visibilidad);

  try {
    let response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Origin': 'http://localhost:5173',
          'x-access-token': token,
        },
        body: formData,
      });
  
      let rdo = response.status;
      let data = await response.json();
  
      // Manejo de respuestas
      switch (rdo) {
        case 200:
          return { rdo: 0, mensaje: "Ok" }; // correcto
  
        case 400:
          return { rdo: 1, mensaje: "No se pudo modificar la visibilidad." };
  
        default:
          return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    } catch (error) {
      console.error('Error en la modificacion de la visibilidad:', error);

      return { rdo: 1, mensaje: "Ha ocurrido un error" };
    }
  };
  