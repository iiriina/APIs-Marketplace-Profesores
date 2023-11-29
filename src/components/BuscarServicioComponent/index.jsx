import React, { useState } from 'react'; 
import data from './data.json';
import ProfessionalCard from '../ProfessionalCard'
import { getServiciosFiltrados } from '../controller/getServiciosFiltrados';
import { useEffect, useRef } from 'react';

export const BuscarServicioComponent = () => {

    const [categoria, setFiltroCategoria] = useState('');
    const [tipo_de_clase, setFiltroTipoDeClase] = useState('');
    const [frecuencia, setFiltroFrecuencia] = useState('');
    const [calificacion, setFiltroCalificacion] = useState('');
  
    const [resultados, setResultados] = useState([]);

    //Esto es para guardar los ultimos filtros ingresados por el usuario
    const filtrosRef = useRef({
      categoria: '',
      tipo_de_clase: '',
      frecuencia: '',
      calificacion: '',
    });
  
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
  
    const buscarPersonas = async (filtros) => {
      try {
        const resultadosFiltrados = await getServiciosFiltrados(filtros);
        setResultados(resultadosFiltrados.data);
      } catch (error) {
        console.error('Error al obtener servicios filtrados:', error);
      }
    };
  
    const handleBuscarClick = () => {
      const filtros = {
        ...(categoria !== '' && { categoria }),
        ...(tipo_de_clase !== '' && { tipo_de_clase }),
        ...(frecuencia !== '' && { frecuencia }),
        ...(calificacion !== '' && { calificacion }),
      };
      console.log("se le manda esto a la bdd", filtros)
      // Actualizar los filtros en el ref
      filtrosRef.current = filtros;
  
      buscarPersonas(filtros);
    };
  
    useEffect(() => {
      // Llama a buscarPersonas al cargar la página con los filtros actuales
      const filtros = {
        ...(categoria !== '' && { categoria }),
        ...(tipo_de_clase !== '' && { tipo_de_clase }),
        ...(frecuencia !== '' && { frecuencia }),
        ...(calificacion !== '' && { calificacion }),
      };
  
      // Actualizar los filtros en el ref
      filtrosRef.current = filtros;
  
      buscarPersonas(filtros);
  
      // Llama a buscarPersonas cada 10 segundos con los últimos filtros seleccionados por el usuario
      const intervalId = setInterval(() => {
        // Obtener los filtros del ref
        buscarPersonas(filtrosRef.current);
      }, 10000);
  
      return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    }, []); // El segundo argumento [] indica que este efecto se ejecutará solo al montar/desmontar el componente
  
    return (
      <div className="framegeneralbuscarservicio">
        <div className="frameservicioprofesores">
          <div className="text-wrapperservicioprofesores">Buscar Servicios</div>
          <div className="divserviciosprofesoresprim">
            <div className="divservicioprofesores">
              <div className="text-wrapper-2servicioprofesores">
                Filtrar por:
              </div>

              {/* aca empiezan los select para los filtros */}
              <div className="filtro_prof">
                <select
                  className="filtro-frecuenciaservicioprofesores"
                  value={categoria}
                  onChange={handleFiltroCategoriaChange}
                >
                  <option value="">Categoria</option>
                  <option value="ingles">Clases de Inglés</option>
                  <option value="matematica">Clases de Matemática</option>
                  <option value="literatura">Clases de Literatura</option>
                  <option value="fisica">Clases de Física</option>
                  <option value="quimica">Clases de Química</option>
                  <option value="programacion">Clases de Programación</option>
                  <option value="cocina">Clases de Cocina</option>
                  <option value="baile">Clases de Baile</option>
                  <option value="piano">Clases de Música</option>

                </select>
              </div>

              <div className="filtro_prof">
                <select
                  className="filtro-frecuenciaservicioprofesores"
                  value={tipo_de_clase}
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
                  value={frecuencia}
                  onChange={handleFiltroFrecuenciaChange}
                >
                  <option value="">Frecuencia</option>
                  <option value="unica">Unica clase</option>
                  <option value="semanal">1 clase por semana</option>
                  <option value="dosclasessemana">2 clases por semana</option>
                  <option value="tresclasessemana">3 clases por semana</option>
                  <option value="cuatroclasessemana">4 clases por semana</option>
                  <option value="cincoclasessemana">5 clases por semana</option>
                </select>
              </div>

              <div className="filtro_prof">
                <select
                  className="filtro-frecuenciaservicioprofesores"
                  value={calificacion}
                  onChange={handleFiltroCalificacionChange}
                >
                  <option value="">Calificacion</option>
                  <option value="0">Sin calificar (0)</option>
                  <option value="1">1 estrella</option>
                  <option value="2">2 estrellas</option>
                  <option value="3">3 estrellas</option>
                  <option value="4">4 estrellas</option>
                  <option value="5">5 estrellas</option>
                </select>
              </div>

              <button
                className="div-wrapperservicioprofesores"
                onClick={handleBuscarClick}
              >
                Buscar
              </button>
            </div>
          </div>

          <div className="tag-profesor-wrapperservicioprofesores">
          {resultados.map((servicio) => {
              return (
                <ProfessionalCard
                  key={servicio._id}
                  id_servicio={servicio._id}
                  imagen={servicio.imagenUrl}
                  nombre={servicio.nombre_usuario}
                  calificacion={servicio.calificacion}
                  tipo_clase={servicio.tipo_de_clase}
                  clase={servicio.nombre_servicio}
                  biografia={servicio.descripcion}
                  precio={servicio.precio}
                />
              );
            })}

          </div>
        </div>
      </div>
    );
};

export default BuscarServicioComponent