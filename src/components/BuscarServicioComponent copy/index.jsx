
import TarjetaServicioProfesor from "../TarjetaServicioProfesor";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import data from './data.json';
import ResponsiveAppBar from "../NavBarMarketplace";
import ResponsiveAppBarlogeado from "../NavBarMarketplacelogeado";
import TarjetaServicioProfesorLogueado from "../TarjetaServicioProfesor copy";



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
          <TarjetaServicioProfesorLogueado />
          <TarjetaServicioProfesorLogueado />
          <TarjetaServicioProfesorLogueado />
          <TarjetaServicioProfesorLogueado />
          <TarjetaServicioProfesorLogueado />

        </div>
      </div>
      </div>
    );
};

export default BuscarServicioLogueadoComponent