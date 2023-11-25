import urlWebServices from '../controller/webServices.js';

//la persona ingresa la nueva contrasenia para el mail al que se le envió el mail
export const guardarContraseniaNueva = async function (cambio) {
  // URL de los servicios web
  let url = urlWebServices.guardarContraseniaNueva;
  
  // Crear un objeto URLSearchParams para los datos del formulario
  const formData = new URLSearchParams();
  formData.append('email', localStorage.resetPasswordEmail); //le mando el email al que le quiero cambiar la contrasenia
  formData.append('contrasenia', cambio.contrasenia); //la contrasenia nueva

  try {
    let response = await fetch(url, {
      method: 'PUT',
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
        return { rdo: 0, mensaje: "Se actualizó correctamente la contraseña" }; // correcto

    case 400:
        return { rdo: 1, mensaje: "No se pudo cambiar la contraseña." };
    
      default:
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
    }
  } catch (error) {
    console.error('Error en la solicitud de cambio de contraseña:', error);
    // Puedes lanzar una excepción o devolver un objeto de error
    return { rdo: 1, mensaje: "Ha ocurrido un error" };
  }
};
