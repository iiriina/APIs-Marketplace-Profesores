import urlWebServices from '../controller/webServices.js';

export const mostrarServiciosDeProfe = async () => {
  let url = urlWebServices.mostrarServiciosDeProfe;

  const token = localStorage.token;

  if (!token) {
    console.warn('No hay token almacenado. No se realizará la operación de obtener servicios.');
    return [];
  }

  const idUsuario = localStorage.id;

  try {
    let response = await fetch(`${url}?id_usuario=${idUsuario}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'x-access-token': token,
        'Content-Type': 'application/json'
      },
    });

    let rdo = response.status;
    let data = await response.json();

    switch (rdo) {
      case 200:
        return data;

      default:
        throw new Error("Error al obtener servicios desde la base de datos");
    }
  } catch (error) {
    console.error('Error en la obtención de servicios desde la base de datos:', error);
    throw error;
  }
};
