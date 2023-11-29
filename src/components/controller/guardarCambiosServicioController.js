import urlWebServices from '../controller/webServices.js';

export const guardarCambiosServicio = async function (servicio) {
  // URL de los servicios web
  let url = urlWebServices.guardarCambiosServicio;

  const token = localStorage.token;

  if (!token) {
    console.warn('No hay token almacenado. No se realizará la operación.');
    return;
  }

  // Crear un objeto URLSearchParams para los datos del servicio
  const data = {
    _id: servicio._id,
    nombre_servicio: servicio.nombre_servicio,
    descripcion: servicio.descripcion,
    duracion: servicio.duracion,
    frecuencia: servicio.frecuencia,
    precio: servicio.precio,
    categoria: servicio.categoria,
    tipo_de_clase: servicio.tipo_de_clase,
    imagen: servicio.imagen,
  };
    
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  

  try {
    let response = await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Origin': 'http://localhost:5173',
        'x-access-token': token,
      },
      body: formData,
      // credentials: 'include' // Considera activar esto si manejas autenticación con cookies
    });

    let rdo = response.status;
    let data = await response.json();

    // Manejo de respuestas
    switch (rdo) {
      case 200:
        return { rdo: 0, mensaje: "Ok" }; // correcto

      case 400:
        return { rdo: 1, mensaje: "No se pudo modificar el servicio." };

      default:
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
    }
  } catch (error) {
    console.error('Error en la modificacion de servicio:', error);
    // Puedes lanzar una excepción o devolver un objeto de error
    return { rdo: 1, mensaje: "Ha ocurrido un error" };
  }
};
