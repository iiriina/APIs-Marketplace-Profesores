
const ProfessionalCard = ({imagen, nombre, tipo_clase, calificacion, clase, biografia, precio}) => {
    
  
  return (
      <div className="tag-profesorservicioprofesores">
        <div className="div-2servicioprofesores">
          <div className="nombreservicioprofesores">
            <img className="imagenservicioprofesores" alt="Imagen" src={imagen} />
            <div className="nombre-y-tiposervicioprofesores">
              <div className="text-wrapper-3servicioprofesores">{nombre}</div>
              <div className="text-wrapper-4servicioprofesores">{tipo_clase}</div>
            </div>
          </div>
          <div className="div-3servicioprofesores">
            <div className="calificacinservicioprofesores">
              <div className="overlap-groupservicioprofesores">
                <div className="valueservicioprofesores">{calificacion}</div>
                <img className="starservicioprofesores" alt="Star" src="https://c.animaapp.com/jt0Q7JA1/img/star@2x.png" />
              </div>
            </div>
            <button className="botn-contactarservicioprofesores">
              <div className="text-wrapper-5servicioprofesores"
                onClick={() => {
                  window.location.href = '/perfil_servicio';
                }}
              >Contactar</div>
            </button>
          </div>
        </div>
        <p className="pservicioprofesores">Clases de {clase}</p>
        <p className="text-wrapper-6servicioprofesores">
          {biografia}
        </p>
        <div className="div-4servicioprofesores">
          <div className="precioservicioprofesores">
            <div className="text-wrapper-7servicioprofesores">${precio}/h</div>
          </div>
          <div className="div-5servicioprofesores">
            <button className="text-wrapper-8servicioprofesores"
              onClick={() => {
                window.location.href = '/perfil_servicio';
              }}
            >
              Ver Perfil
            </button>
            <button className="text-wrapper-9servicioprofesores"
              onClick={() => {
                window.location.href = '/perfil_servicio';
              }}
            >
              Ver Comentarios
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProfessionalCard;