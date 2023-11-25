import urlWebServices from '../controller/webServices.js';

//recibe los datos de un nuevo servicio y tiene que actualizar periodicamente
//para ver si se crearon servicios nuevos y mostrarlos en la pantalla de mis servicios
export const crearNuevoServicio = async function (cambio) {
  // URL de los servicios web
  let url = urlWebServices.crearNuevoServicio;
  
  const data = {
    id_usuario: localStorage.id,
    nombre_servicio: cambio.nombre_servicio,
    descripcion: cambio.descripcion,
    duracion: cambio.duracion,
    frecuencia: cambio.frecuencia,
    calificacion: cambio.calificacion,
    precio: cambio.precio,
    categoria: cambio.categoria,
    tipo_de_clase: cambio.tipo_de_clase,
    imagen: cambio.imagen,
  };
    
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  
  try {
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Origin': 'http://localhost:5173',
        'x-access-token': localStorage.token,
      },
      body: formData,
    });
  
    let rdo = response.status;

    let resultado = await response.json();

    // Manejo de respuestas
    switch (rdo) {
      case 201:
        return { rdo: 0, mensaje: "Se creó correctamente el servicio" }; // correcto

    case 400:
        return { rdo: 1, mensaje: "Error al crear el servicio." };

      default:
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
    }
  } catch (error) {
    console.error('Error en la creación del servicio:', error);
    // Puedes lanzar una excepción o devolver un objeto de error
    return { rdo: 1, mensaje: "Ha ocurrido un error" };
  }
};
