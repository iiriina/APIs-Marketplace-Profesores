import urlWebServices from '../controller/webServices.js';

export const cambiarEstadoContratacion = async (datosContratacion) => {
  let url = urlWebServices.cambiarEstadoContratacion;

  const token = localStorage.token;

  if (!token) {
    console.warn('No hay token almacenado. No se realizará la operación de eliminar servicio.');
    return [];
  }

  if (!datosContratacion.id_contratacion || !datosContratacion.estado){
    return { rdo: 1, mensaje: "No se pudo cambiar el estado." };
  }

    // Crear un objeto URLSearchParams para los datos
    const formData = new URLSearchParams();
    formData.append('id_contratacion', datosContratacion.id_contratacion); 
    formData.append('id_usuario', localStorage.id);
    formData.append('estado', datosContratacion.estado);

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
          return { rdo: 1, mensaje: "No se pudo modificar el estado." };
  
        default:
          return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    } catch (error) {
      console.error('Error en la modificacion de estado:', error);

      return { rdo: 1, mensaje: "Ha ocurrido un error" };
    }
  };
  