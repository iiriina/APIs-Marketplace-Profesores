const urlApi = "http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    solicitoCambioContrasenia:urlApi +"api/users/solicitarCambioContrasenia",
    guardarContraseniaNueva:urlApi + "api/users/cambiarContrasenia",
    crearNuevoServicio:urlApi + "api/servicios/crearServicio",
    mostrarServiciosDeProfe:urlApi + "api/servicios/serviciosDeUsuario",
    getServicioPorIdServicio:urlApi + "api/servicios/servicioPorIdServicio",
    guardarCambiosServicio:urlApi + "api/servicios/modificarServicio",
    eliminarServicioPorIdServicio:urlApi + "api/servicios/eliminarServicio",
    getServiciosFiltrados:urlApi + "api/servicios/servicios",
    hacerComentarioEnServicio:urlApi + "api/comentarios/crearComentario",
    crearContratacion:urlApi + "api/contrataciones/crearContratacion",
    mostrarComentariosPendientes:urlApi + "api/comentarios/mostrarComentariosPendientes",
    aceptarComentario:urlApi + "api/comentarios/aceptarComentario",
    eliminarComentario:urlApi + "api/comentarios/borrarComentario",
    mostrarContrataciones:urlApi + "api/contrataciones/mostrarContrataciones",
    cambiarEstadoContratacion:urlApi + "api/contrataciones/cambiarEstadoContratacion",
    registrarUsuario:urlApi + "api/users/registration",
    cambiarVisibilidadServicio:urlApi + "api/servicios/cambiarVisibilidad",
}

export default urlWebServices;