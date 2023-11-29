import urlWebServices from '../controller/webServices.js';

export const getServicioPorIdServicio = async (id_servicio) => {
  let url = urlWebServices.getServicioPorIdServicio;

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
        console.log("el back me devuelve esto:", data);
        return data;

        case 400:
            return { rdo: 1, mensaje: "No se pudo mostrar el servicio." };
    
      default:
        throw new Error("Error al obtener el servicio desde la base de datos");
    }
  } catch (error) {
    console.error('Error en la obtención del servicio desde la base de datos:', error);
    throw error;
  }
};
