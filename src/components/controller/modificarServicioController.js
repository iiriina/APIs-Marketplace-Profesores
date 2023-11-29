import urlWebServices from '../controller/webServices.js';

export const modificarServicio = async (id_servicio) => {
  let url = urlWebServices.getServicioPorIdServicio;

  const token = localStorage.token;

  if (!token) {
    console.warn('No hay token almacenado. No se realizará la operación de obtener servicios.');
    return [];
  }

  try {
    let response = await fetch(`${url}?id_servicio=${id_servicio}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });

    let rdo = response.status;
    let data = await response.json();

    switch (rdo) {
      case 200:
        return data;

        case 400:
            return { rdo: 1, mensaje: "No se pudo mostrar el servicio." };
    
      default:
        throw new Error("Error al obtener servicios desde la base de datos");
    }
  } catch (error) {
    console.error('Error en la obtención de servicios desde la base de datos:', error);
    throw error;
  }
};
