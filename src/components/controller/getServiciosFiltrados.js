import urlWebServices from '../controller/webServices.js';

export const getServiciosFiltrados = async (filtros) => {
  let url = urlWebServices.getServiciosFiltrados;
    
  try {
  // Convierte el objeto de filtros en una cadena de consulta para la URL
    const queryParams = new URLSearchParams(filtros);

    let response = await fetch(`${url}?${queryParams}`, {
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
            return { rdo: 1, mensaje: "No se encontraron servicios." };
    
      default:
        throw new Error("Error al mostrar servicios desde la bdd");
    }
  } catch (error) {
    console.error('Error al mostrar servicios:', error);
    throw error;
  }
};
