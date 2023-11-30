import urlWebServices from '../controller/webServices.js';

export const eliminarComentario = async (id_comentario, id_servicio) => {
  let url = urlWebServices.eliminarComentario;

  const token = localStorage.token;

  if (!token) {
    console.warn('No hay token almacenado. No se realizará la operación de eliminar comentario.');
    return [];
  }

  if (!id_servicio || !id_comentario){
    return { rdo: 1, mensaje: "No se pudo eliminar el comentario." };
  }

  try {
    let response = await fetch(`${url}?id_comentario=${id_comentario}&id_servicio=${id_servicio}&id_usuario=${localStorage.id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Origin': 'http://localhost:5173',
            'x-access-token': token,
        },
      });
  
    let rdo = response.status;
    let data = await response.json();

    if (!data) {
        console.error('La respuesta DELETE no tiene un cuerpo definido:', response);
        throw new Error('Error al eliminar el comentario desde la base de datos');
      }
      
    switch (rdo) {
      case 200:
        return data;

      case 400:
        return { rdo: 1, mensaje: "No se pudo eliminar el comentario." };

    }
  } catch (error) {
    console.error('Error al realizar la solicitud DELETE:', error);
    throw error;
  }
};
