import urlWebServices from '../controller/webServices.js';

export const mostrarContrataciones = async () => {
  let url = urlWebServices.mostrarContrataciones;

  const token = localStorage.token;

  if (!token) {
    console.warn('No hay token almacenado. No se pueden mostrar contrataciones.');
    return [];
  }

  if (!localStorage.id){
    return { rdo: 1, mensaje: "No se pueden mostrar contrataciones." };
  }

  try {
    let response = await fetch(`${url}?id_usuario=${localStorage.id}`, {
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
        console.log("el back me devuelve esto:", data);
        return data;

        case 400:
            return { rdo: 1, mensaje: "No se pueden mostrar contrataciones." };
    
      default:
        throw new Error("Error al mostrar las contrataciones desde la base de datos");
    }
  } catch (error) {
    console.error('Error en la obtención de las contrataciones desde la base de datos:', error);
    throw error;
  }
};
