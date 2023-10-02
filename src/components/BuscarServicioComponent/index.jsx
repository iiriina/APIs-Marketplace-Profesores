
import TarjetaServicioProfesor from "../TarjetaServicioProfesor";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import data from './data.json';



export const BuscarServicioComponent = () => {

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
                <option value="clasesGuitarra">Clases de Guitarra</option>
                <option value="clasesViolin">Clases de Violín</option>
                <option value="clasesMatematica">Clases de Matemática</option>
              </select>
            </div>

            <div className="filtro_prof">
              <select
                className="filtro-frecuenciaservicioprofesores"
                value={filtroTipoDeClase}
                onChange={handleFiltroTipoDeClaseChange}
              >
                <option value="">Categoria</option>
                <option value="clasesGuitarra">Clases de Guitarra</option>
                <option value="">Tipo de Clase</option>
                <option value="individual">Clases Individuales </option>
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
          <TarjetaServicioProfesor />
          <TarjetaServicioProfesor />
          <TarjetaServicioProfesor />
          <TarjetaServicioProfesor />
          <TarjetaServicioProfesor />
        </div>
      </div>
    );
};

export default BuscarServicioComponent