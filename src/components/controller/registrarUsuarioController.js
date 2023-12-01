import urlWebServices from '../controller/webServices.js';

export const registrarUsuario = async function (datosUsuario) {
  // URL de los servicios web
  let url = urlWebServices.registrarUsuario;
  
  // Crear un objeto URLSearchParams para los datos del formulario
  const formData = new URLSearchParams();
  formData.append('nombre', datosUsuario.nombre);
  formData.append('email', datosUsuario.email);
  formData.append('contrasenia', datosUsuario.contrasenia);
  formData.append('telefono', datosUsuario.telefono);
  formData.append('titulo', datosUsuario.titulo);
  formData.append('experiencia', datosUsuario.experiencia);

  try {
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Origin': 'http://localhost:5173',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData,
      // credentials: 'include' // Considera activar esto si manejas autenticación con cookies
    });

    let rdo = response.status;
    let data = await response.json();

    // Manejo de respuestas
    switch (rdo) {
      case 201:
        return { rdo: 0, mensaje: "Se ha creado correctamente el usuario." }; // correcto

    case 400:
        return { rdo: 1, mensaje: "Error creando el usuario." };
    
    case 401:
        return { rdo: 1, mensaje: "El telefono debe ser un numero." };
        
    case 402:
        return { rdo: 1, mensaje: "El correo electrónico ya está en uso." };

      default:
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
    }
  } catch (error) {
    console.error('Error en la solicitud de crear usuario:', error);
    // Puedes lanzar una excepción o devolver un objeto de error
    return { rdo: 1, mensaje: "Ha ocurrido un error" };
  }
};