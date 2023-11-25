import urlWebServices from '../controller/webServices.js';

//va a recibir un mail la persona, y debe apretar en el link al que le llega la nueva contra
//para poder cambiarla ingresando de nuevo su email y nueva contrasenia
export const solicitoCambioContrasenia = async function (cambio) {
  // URL de los servicios web
  let url = urlWebServices.solicitoCambioContrasenia;
  
  // Crear un objeto URLSearchParams para los datos del formulario
  const formData = new URLSearchParams();
  formData.append('email', cambio.email); //le mando el email al que le quiero cambiar la contrasenia

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
      case 200:
        localStorage.setItem('resetPasswordEmail', cambio.email);
        return { rdo: 0, mensaje: "Email de cambio de contraseña enviado" }; // correcto

    case 400:
        return { rdo: 1, mensaje: "No se pudo enviar el mail." };

    case 404:
        return { rdo: 1, mensaje: "No existe un usuario con ese correo electrónico" };
    
      default:
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
    }
  } catch (error) {
    console.error('Error en la solicitud de cambio de contraseña:', error);
    // Puedes lanzar una excepción o devolver un objeto de error
    return { rdo: 1, mensaje: "Ha ocurrido un error" };
  }
};
