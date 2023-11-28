const urlApi = "http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    solicitoCambioContrasenia:urlApi +"api/users/solicitarCambioContrasenia",
    guardarContraseniaNueva:urlApi + "api/users/cambiarContrasenia",
    crearNuevoServicio:urlApi + "api/servicios/crearServicio",
    mostrarServiciosDeProfe:urlApi + "api/servicios/serviciosDeUsuario"
}

export default urlWebServices;