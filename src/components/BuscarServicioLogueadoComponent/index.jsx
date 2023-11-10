import React, { useState } from 'react'; 
import data from './data.json';
import ProfessionalCard from '../ProfessionalCard'


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

            {/* aca empiezan los select para los filtros */}
            <div className="filtro_prof">
              <select
                className="filtro-frecuenciaservicioprofesores"
                value={filtroCategoria}
                onChange={handleFiltroCategoriaChange}
              >
                <option value="">Categoria</option>
                <option value="clasesIngles">Clases de Guitarra</option>
                <option value="clasesPortugues">Clases de Piano</option>
                <option value="clasesIngles">Clases de Inglés</option>
                <option value="clasesPortugues">Clases de Cálculo</option>
                <option value="clasesIngles">Clases de Física</option>
                <option value="clasesIngles">Clases de Química</option>
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

      <ProfessionalCard 
              imagen="https://c.animaapp.com/sytn1YQT/img/image-14@2x.png" 
              nombre="Luz Rivas" 
              calificacion={4.6} 
              tipo_clase="Grupal"
              clase="matemática y física"
              biografia="Recibida en UBA. Brindo apoyo en clases de matemática de 1ro a 3er año del secundario. Tengo muchos años de
          experiencia en el sector. No dudes en contactarme."
              precio={7500}
            />

            <ProfessionalCard
              imagen="https://c.animaapp.com/jt0Q7JA1/img/imagen.png"
              nombre="Juan Carlos"
              calificacion={4.3}
              tipo_clase="Individual"
              clase="inglés"
              biografia="Recibido en UADE. Brindo apoyo en clases de Inglés en todos los niveles. Tengo muchos años de
          experiencia en el ámbito. No dudes en enviarme un mensaje!"
              precio={5000}
            />

            <ProfessionalCard
              imagen="https://c.animaapp.com/ti5XucTd/img/image-15@2x.png"
              nombre="Ivana Jaz"
              calificacion={4.9}
              tipo_clase="Grupal"
              clase="cocina vegetariana"
              biografia="Recibida en UCA. Clases de cocina vegana y vegetariana para todas las edades. 
          Realicé un curso de esquina de las flores. No dudes en enviarme un mensaje!"
              precio={6000}
            />

            <ProfessionalCard
              imagen="https://c.animaapp.com/naTp685l/img/image-16@2x.png"
              nombre="Marcos Go"
              calificacion={4.2}
              tipo_clase="Individual"
              clase="economía"
              biografia="Clases de economía, nivel secundario y universitario. Tengo años de experiencia. 
          Realicé un Postgrado en Ciencias Económicas en la UNLAM. Estoy a tu disposición."
              precio={4500}
            />
       
            <ProfessionalCard
              imagen="https://c.animaapp.com/TyQOJEoI/img/image-17@2x.png"
              nombre="Miguel Sanz"
              calificacion={5.0}
              tipo_clase="Grupal"
              clase="política"
              biografia="Clases de política, nivel terciario y para aficionados. Clases pedagógicas y lúdicas, con juegos.
          Realicé un Postgrado en Ciencias Políticas en la UBA. Estoy a tu disposición."
              precio={4500}
            />

            <ProfessionalCard
              imagen="https://i.ibb.co/q9n0WF7/image-18.png"
              nombre="Liz Chacon"
              calificacion={5.0}
              tipo_clase="Grupal"
              clase="stand-up"
              biografia="Clases de Standup, 8 clases semanales que harán que puedas hacer shows nacionales. 
          Realicé varias comedias en el teatro. No dudes en hablarme! Gracias!"
              precio={7500}
            />



        </div>
      </div>
      </div>
    );
};

export default BuscarServicioLogueadoComponent