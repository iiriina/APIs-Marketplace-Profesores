import urlWebServices from '../controller/webServices.js';

export const eliminarServicio = async (id_servicio) => {
  let url = urlWebServices.eliminarServicioPorIdServicio;

  const token = localStorage.token;

  if (!token) {
    console.warn('No hay token almacenado. No se realizará la operación de eliminar servicio.');
    return [];
  }

  try {
    let response = await fetch(`${url}?id=${id_servicio}&id_usuario=${localStorage.id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Origin': 'http://localhost:5173',
            'x-access-token': token,
        },
      });
  
    let rdo = response.status;
    let data = await response.json();

    switch (rdo) {
      case 200:
        return data;

        case 400:
            return { rdo: 1, mensaje: "No se pudo eliminar el servicio." };
    
      default:
        throw new Error("Error al eliminar el servicio desde la base de datos");
    }
  } catch (error) {
    console.error('Error al eliminar el servicio desde la base de datos:', error);
    throw error;
  }
};
