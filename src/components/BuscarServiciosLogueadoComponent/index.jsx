import React, { useState } from 'react'; 
import data from './data.json';
import TarjetaServicioProfesorLogueado from "../TarjetaServicioProfesorLogueado";

export const BuscarServicioLogueadoComponent = () => {

    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [filtroTipoDeClase, setFiltroTipoDeClase] = useState('');
    const [filtroFrecuencia, setFiltroFrecuencia] = useState('');
    const [filtroCalificacion, setFiltroCalificacion] = useState('');
  
    const [resultados, setResultados] = useState(data);
  
    const handleFiltroCategoriaChange = (event) => {
      setFiltroCategoria(event.target.value);
    };
  
    const handleFiltroTipoDeClaseChange = (event) => {
      setFiltroTipoDeClase(event.target.value);
    };
  
    const handleFiltroFrecuenciaChange = (event) => {
      setFiltroFrecuencia(event.target.value);
    };
  
    const handleFiltroCalificacionChange = (event) => {
      setFiltroCalificacion(event.target.value);
    };
  
    function buscarPersonas() {
      const resultadosFiltrados = data.filter(({ categoria, tipo_de_clase, frecuencia, calificacion}) => {
        const cumpleCategoria = (filtroCategoria === '') ? true : categoria === filtroCategoria;
        const cumpleTipo_De_Clase = (filtroTipoDeClase === '') ? true : tipo_de_clase === filtroTipoDeClase;
        const cumpleFrecuencia = (filtroFrecuencia === '') ? true : frecuencia === filtroFrecuencia;
        const cumpleCalificacion =  ((filtroCalificacion === '') ? true : calificacion >= filtroCalificacion);
        
        return cumpleCategoria && cumpleTipo_De_Clase && cumpleFrecuencia && cumpleCalificacion;
      });
      setResultados(resultadosFiltrados);
    }


    return (
      <div className="framegeneralbuscarservicio">
      <div className="frameservicioprofesores">
        <div className="text-wrapperservicioprofesores">Buscar Servicios</div>
        <div className="divserviciosprofesoresprim">
          <div className="divservicioprofesores">
            <div className="text-wrapper-2servicioprofesores">Filtrar por:</div>

            <div className="filtro_prof">
              <select
                className="filtro-frecuenciaservicioprofesores"
                value={filtroCategoria}
                onChange={handleFiltroCategoriaChange}
              >
                <option value="">Categoria</option>
                <option value="">  Música</option>
                <option value="clasesIngles">Clases de Guitarra</option>
                <option value="clasesFrances">Clases de Violín</option>
                <option value="clasesPortugues">Clases de Piano</option>
                <option value="">  Arte</option>
                <option value="clasesIngles">Clases de Dibujo</option>
                <option value="clasesFrances">Clases de Baile</option>
                <option value="clasesPortugues">Clases de Canto</option>
                <option value="clasesPortugues">Clases de Cerámica</option>
                <option value="">  Idiomas</option>
                <option value="clasesIngles">Clases de Inglés</option>
                <option value="clasesFrances">Clases de Francés</option>
                <option value="clasesPortugues">Clases de Portugués</option>
                <option value="">  Matemática</option>
                <option value="clasesIngles">Clases de Álgebra</option>
                <option value="clasesFrances">Clases de Estadística</option>
                <option value="clasesPortugues">Clases de Cálculo</option>
                <option value="">  Física</option>
                <option value="clasesIngles">Clases de Física</option>
                <option value="clasesFrances">Clases de Mecánica</option>
                <option value="clasesPortugues">Clases de Óptica</option>
                <option value="">  Ciencias</option>
                <option value="clasesIngles">Clases de Química</option>
                <option value="clasesFrances">Clases de Biología</option>
                <option value="">  Programación</option>
                <option value="clasesIngles">Clases de C++</option>
                <option value="clasesFrances">Clases de Python</option>
                <option value="clasesPortugues">Clases de React</option>

              </select>
            </div>

            <div className="filtro_prof">
              <select
                className="filtro-frecuenciaservicioprofesores"
                value={filtroTipoDeClase}
                onChange={handleFiltroTipoDeClaseChange}
              >
                <option value="">Tipo de Clase</option>
                <option value="individual">Clases Individuales</option>
                <option value="grupal">Clases Grupales</option>
              </select>
            </div>

            <div className="filtro_prof">
              <select
                className="filtro-frecuenciaservicioprofesores"
                value={filtroFrecuencia}
                onChange={handleFiltroFrecuenciaChange}
              >
                <option value="">Frecuencia</option>
                <option value="unahora">1 hora</option>
                <option value="unahoraymedia">1 hora y media</option>
                <option value="doshoras">2 horas</option>
                <option value="doshoras">3 horas</option>
                <option value="semanal">semanal</option>
                <option value="mensual">mensual</option>
                <option value="trimestral">trimestral</option>
                <option value="seismeses">seis meses</option>
                <option value="ochomeses">ocho meses</option>
                <option value="anual">anual</option>
              </select>
            </div>

            <input
              className="filtro-frecuenciaservicioprofesores"
              type="number"
              id="calificacion"
              placeholder="Calificacion"
              value={filtroCalificacion}
              onChange={(e) => setFiltroCalificacion(e.target.value)}
            />

            <button
              className="div-wrapperservicioprofesores"
              
              onClick={buscarPersonas}
            >
              Buscar
            </button>
          </div>
        </div>

        <div className="tag-profesor-wrapperservicioprofesores">

      {/* componentes de tarjeta */}

      <div className="tag-profesorservicioprofesores">
        <div className="div-2servicioprofesores">
          <div className="nombreservicioprofesores">
            <img className="imagenservicioprofesores" alt="Imagen" src="https://c.animaapp.com/sytn1YQT/img/image-14@2x.png" />
            <div className="nombre-y-tiposervicioprofesores">
              <div className="text-wrapper-3servicioprofesores">Luz Rivas</div>
              <div className="text-wrapper-4servicioprofesores">Grupal</div>
            </div>
          </div>
          <div className="div-3servicioprofesores">
            <div className="calificacinservicioprofesores">
              <div className="overlap-groupservicioprofesores">
                <div className="valueservicioprofesores">4.3 (20)</div>
                <img className="starservicioprofesores" alt="Star" src="https://c.animaapp.com/jt0Q7JA1/img/star@2x.png" />
              </div>
            </div>
            <button className="botn-contactarservicioprofesores">
              <div className="text-wrapper-5servicioprofesores"
                onClick={() => {
                  window.location.href = '/perfil_servicio/logged';
                }}
              >Contactar</div>
            </button>
          </div>
        </div>
        <p className="pservicioprofesores">Clases de Matemática y Física</p>
        <p className="text-wrapper-6servicioprofesores">
          Recibida en UBA. Brindo apoyo en clases de matemática de 1ro a 3er año del secundario. Tengo muchos años de
          experiencia en el sector. No dudes en contactarme.
        </p>
        <div className="div-4servicioprofesores">
          <div className="precioservicioprofesores">
            <div className="text-wrapper-7servicioprofesores">$7500/h</div>
          </div>
          <div className="div-5servicioprofesores">
            <button className="text-wrapper-8servicioprofesores"  
            onClick={() => {
              window.location.href = '/perfil_servicio/logged';
            }}
            >
              Ver Perfil
              </button>
            <button className="text-wrapper-9servicioprofesores"
                        onClick={() => {
                          window.location.href = '/perfil_servicio/logged';
                        }}
            >
              Ver Comentarios
              </button>
          </div>
        </div>
      </div>

          {/* componentes de tarjeta */}

          <div className="tag-profesorservicioprofesores">
        <div className="div-2servicioprofesores">
          <div className="nombreservicioprofesores">
            <img className="imagenservicioprofesores" alt="Imagen" src="https://c.animaapp.com/jt0Q7JA1/img/imagen.png" />
            <div className="nombre-y-tiposervicioprofesores">
              <div className="text-wrapper-3servicioprofesores">Juan Carlos</div>
              <div className="text-wrapper-4servicioprofesores">Individual</div>
            </div>
          </div>
          <div className="div-3servicioprofesores">
            <div className="calificacinservicioprofesores">
              <div className="overlap-groupservicioprofesores">
                <div className="valueservicioprofesores">4.3 (20)</div>
                <img className="starservicioprofesores" alt="Star" src="https://c.animaapp.com/jt0Q7JA1/img/star@2x.png" />
              </div>
            </div>
            <button className="botn-contactarservicioprofesores">
              <div className="text-wrapper-5servicioprofesores"
                onClick={() => {
                  window.location.href = '/perfil_servicio/logged';
                }}
              >Contactar</div>
            </button>
          </div>
        </div>
        <p className="pservicioprofesores">Clases de Inglés</p>
        <p className="text-wrapper-6servicioprofesores">
          Recibido en UADE. Brindo apoyo en clases de Inglés en todos los niveles. Tengo muchos años de
          experiencia en el ámbito. No dudes en enviarme un mensaje!
        </p>
        <div className="div-4servicioprofesores">
          <div className="precioservicioprofesores">
            <div className="text-wrapper-7servicioprofesores">$5000/h</div>
          </div>
          <div className="div-5servicioprofesores">
            <button className="text-wrapper-8servicioprofesores"  
            onClick={() => {
              window.location.href = '/perfil_servicio/logged';
            }}
            >
              Ver Perfil
              </button>
            <button className="text-wrapper-9servicioprofesores"
                        onClick={() => {
                          window.location.href = '/perfil_servicio/logged';
                        }}
            >
              Ver Comentarios
              </button>
          </div>
        </div>
      </div>

          {/* componentes de tarjeta */}

          <div className="tag-profesorservicioprofesores">
        <div className="div-2servicioprofesores">
          <div className="nombreservicioprofesores">
            <img className="imagenservicioprofesores" alt="Imagen" src="https://c.animaapp.com/ti5XucTd/img/image-15@2x.png" />
            <div className="nombre-y-tiposervicioprofesores">
              <div className="text-wrapper-3servicioprofesores">Ivana Jaz</div>
              <div className="text-wrapper-4servicioprofesores">Grupal</div>
            </div>
          </div>
          <div className="div-3servicioprofesores">
            <div className="calificacinservicioprofesores">
              <div className="overlap-groupservicioprofesores">
                <div className="valueservicioprofesores">4.9 (10)</div>
                <img className="starservicioprofesores" alt="Star" src="https://c.animaapp.com/jt0Q7JA1/img/star@2x.png" />
              </div>
            </div>
            <button className="botn-contactarservicioprofesores">
              <div className="text-wrapper-5servicioprofesores"
                onClick={() => {
                  window.location.href = '/perfil_servicio/logged';
                }}
              >Contactar</div>
            </button>
          </div>
        </div>
        <p className="pservicioprofesores">Clases de Cocina Vegetariana</p>
        <p className="text-wrapper-6servicioprofesores">
          Recibida en UCA. Clases de cocina vegana y vegetariana para todas las edades. 
          Realicé un curso de esquina de las flores. No dudes en enviarme un mensaje!
        </p>
        <div className="div-4servicioprofesores">
          <div className="precioservicioprofesores">
            <div className="text-wrapper-7servicioprofesores">$6000/h</div>
          </div>
          <div className="div-5servicioprofesores">
            <button className="text-wrapper-8servicioprofesores"  
            onClick={() => {
              window.location.href = '/perfil_servicio/logged';
            }}
            >
              Ver Perfil
              </button>
            <button className="text-wrapper-9servicioprofesores"
                        onClick={() => {
                          window.location.href = '/perfil_servicio/logged';
                        }}
            >
              Ver Comentarios
              </button>
          </div>
        </div>
      </div>

                {/* componentes de tarjeta */}
                
                <div className="tag-profesorservicioprofesores">
        <div className="div-2servicioprofesores">
          <div className="nombreservicioprofesores">
            <img className="imagenservicioprofesores" alt="Imagen" src="https://c.animaapp.com/naTp685l/img/image-16@2x.png" />
            <div className="nombre-y-tiposervicioprofesores">
              <div className="text-wrapper-3servicioprofesores">Marcos Go</div>
              <div className="text-wrapper-4servicioprofesores">Individual</div>
            </div>
          </div>
          <div className="div-3servicioprofesores">
            <div className="calificacinservicioprofesores">
              <div className="overlap-groupservicioprofesores">
                <div className="valueservicioprofesores">4.2 (10)</div>
                <img className="starservicioprofesores" alt="Star" src="https://c.animaapp.com/jt0Q7JA1/img/star@2x.png" />
              </div>
            </div>
            <button className="botn-contactarservicioprofesores">
              <div className="text-wrapper-5servicioprofesores"
                onClick={() => {
                  window.location.href = '/perfil_servicio/logged';
                }}
              >Contactar</div>
            </button>
          </div>
        </div>
        <p className="pservicioprofesores">Clases de Economía</p>
        <p className="text-wrapper-6servicioprofesores">
          Clases de economía, nivel secundario y universitario. Tengo años de experiencia. 
          Realicé un Postgrado en Ciencias Económicas en la UNLAM. Estoy a tu disposición.
        </p>
        <div className="div-4servicioprofesores">
          <div className="precioservicioprofesores">
            <div className="text-wrapper-7servicioprofesores">$4500/h</div>
          </div>
          <div className="div-5servicioprofesores">
            <button className="text-wrapper-8servicioprofesores"  
            onClick={() => {
              window.location.href = '/perfil_servicio/logged';
            }}
            >
              Ver Perfil
              </button>
            <button className="text-wrapper-9servicioprofesores"
                        onClick={() => {
                          window.location.href = '/perfil_servicio/logged';
                        }}
            >
              Ver Comentarios
              </button>
          </div>
        </div>
      </div>

      
      {/* componentes de tarjeta */}
      <div className="tag-profesorservicioprofesores">
        <div className="div-2servicioprofesores">
          <div className="nombreservicioprofesores">
            <img className="imagenservicioprofesores" alt="Imagen" src="https://c.animaapp.com/TyQOJEoI/img/image-17@2x.png" />
            <div className="nombre-y-tiposervicioprofesores">
              <div className="text-wrapper-3servicioprofesores">Miguel Sanz</div>
              <div className="text-wrapper-4servicioprofesores">Grupal</div>
            </div>
          </div>
          <div className="div-3servicioprofesores">
            <div className="calificacinservicioprofesores">
              <div className="overlap-groupservicioprofesores">
                <div className="valueservicioprofesores">5.0 (41)</div>
                <img className="starservicioprofesores" alt="Star" src="https://c.animaapp.com/jt0Q7JA1/img/star@2x.png" />
              </div>
            </div>
            <button className="botn-contactarservicioprofesores">
              <div className="text-wrapper-5servicioprofesores"
                onClick={() => {
                  window.location.href = '/perfil_servicio/logged';
                }}
              >Contactar</div>
            </button>
          </div>
        </div>
        <p className="pservicioprofesores">Clases de Política</p>
        <p className="text-wrapper-6servicioprofesores">
          Clases de política, nivel terciario y para aficionados. Clases pedagógicas y lúdicas, con juegos.
          Realicé un Postgrado en Ciencias Políticas en la UBA. Estoy a tu disposición.
        </p>
        <div className="div-4servicioprofesores">
          <div className="precioservicioprofesores">
            <div className="text-wrapper-7servicioprofesores">$4500/h</div>
          </div>
          <div className="div-5servicioprofesores">
            <button className="text-wrapper-8servicioprofesores"  
            onClick={() => {
              window.location.href = '/perfil_servicio/logged';
            }}
            >
              Ver Perfil
              </button>
            <button className="text-wrapper-9servicioprofesores"
                        onClick={() => {
                          window.location.href = '/perfil_servicio/logged';
                        }}
            >
              Ver Comentarios
              </button>
          </div>
        </div>
      </div>
      
      {/* componentes de tarjeta */}
      <div className="tag-profesorservicioprofesores">
        <div className="div-2servicioprofesores">
          <div className="nombreservicioprofesores">
            <img className="imagenservicioprofesores" alt="Imagen" src="https://i.ibb.co/q9n0WF7/image-18.png" />
            <div className="nombre-y-tiposervicioprofesores">
              <div className="text-wrapper-3servicioprofesores">Liz Chacon</div>
              <div className="text-wrapper-4servicioprofesores">Grupal</div>
            </div>
          </div>
          <div className="div-3servicioprofesores">
            <div className="calificacinservicioprofesores">
              <div className="overlap-groupservicioprofesores">
                <div className="valueservicioprofesores">5.0 (21)</div>
                <img className="starservicioprofesores" alt="Star" src="https://c.animaapp.com/jt0Q7JA1/img/star@2x.png" />
              </div>
            </div>
            <button className="botn-contactarservicioprofesores">
              <div className="text-wrapper-5servicioprofesores"
                onClick={() => {
                  window.location.href = '/perfil_servicio/logged';
                }}
              >Contactar</div>
            </button>
          </div>
        </div>
        <p className="pservicioprofesores">Clases de Stand-Up</p>
        <p className="text-wrapper-6servicioprofesores">
          Clases de Standup, 8 clases semanales que harán que puedas hacer shows nacionales. 
          Realicé varias comedias en el teatro. No dudes en hablarme! Gracias!
        </p>
        <div className="div-4servicioprofesores">
          <div className="precioservicioprofesores">
            <div className="text-wrapper-7servicioprofesores">$5700/h</div>
          </div>
          <div className="div-5servicioprofesores">
            <button className="text-wrapper-8servicioprofesores"  
            onClick={() => {
              window.location.href = '/perfil_servicio/logged';
            }}
            >
              Ver Perfil
              </button>
            <button className="text-wrapper-9servicioprofesores"
                        onClick={() => {
                          window.location.href = '/perfil_servicio/logged';
                        }}
            >
              Ver Comentarios
              </button>
          </div>
        </div>
      </div>



          <TarjetaServicioProfesorLogueado />



        </div>
      </div>
      </div>
    );
};

export default BuscarServicioLogueadoComponent