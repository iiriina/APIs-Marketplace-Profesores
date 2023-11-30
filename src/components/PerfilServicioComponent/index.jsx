import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import {useEffect } from 'react';

import { getServicioPorIdServicio } from '../controller/getServicioPorIdServicio';
import ComentariosComponent from '../ComentariosComponent';
import ContratacionComponent from '../ContratacionComponent';

export const PerfilServicioComponent = ({ id_servicio }) => {
  const [servicioData, setServicioData] = useState(null);
  const [open, setOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getServicioPorIdServicio(id_servicio);
      console.log(data);
      setServicioData(data.data);
      console.log("los comentarios que hay son:", setServicioData.comentarios);
    } catch (error) {
      console.error('Error fetching servicio data:', error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    fetchData();
  }, [id_servicio]);

    return (

        <div className="div-general_perfil_servicio">
            {servicioData ? (
            <div style={{ width: '100%' }}>
            <div className="titulo_perfil_servicioooo">Clases de {servicioData.nombre_servicio}</div>
            <div className="frameperfilservicio">
            <div className="divperfilservicio">
            <div className="text-wrapperperfilservicio"></div>
            <div className="div-2perfilservicio">
                <div className="text-wrapper-2perfilservicio">Descripción del servicio:</div>
                <p className="pperfilservicio">{servicioData.descripcion}</p>
            </div>
            <div className="div-2perfilservicio">
                <div className="text-wrapper-2perfilservicio">Biografía Docente:</div>
            
                <p className="pperfilservicio">Hola! Soy {servicioData.titulo}. {servicioData.experiencia}</p>
            </div>

            <div className="text-wrapper-3perfilservicio">Comentarios:</div>
        
            {servicioData.comentarios.length > 0 ? (
                servicioData.comentarios.map((comentario, index) => (
                    <div key={index} className="div-3perfilservicio">
                    <div className="div-4perfilservicio">
                        <div className="div-wrapperperfilservicio">
                        <div className="text-wrapper-4perfilservicio">{comentario.nombre_estudiante}:</div>
                        </div>
                        <div className="div-5perfilservicio">
                        <div className="text-wrapper-5perfilservicio">{comentario.calificacion}</div>
                        <div className="text-wrapper-5perfilservicio">⭐</div>
                        </div>
                        <p className="text-wrapper-6perfilservicio">{comentario.comentario}</p>
                    </div>
                    </div>
                ))
            ) : (
                <div className="div_nuevoo">
                    <p className="pperfilservicio">Aún no hay comentarios 😇.</p>
                </div>
            )}

          {/* Componente de Comentarios */}
          <ComentariosComponent id_servicio={id_servicio} servicioData={servicioData} fetchData={fetchData} />

            </div>
            <div className="frame-wrapperperfilservicio">
            <div className="div-6perfilservicio">
            <img className="imagenperfilservicio" alt="Imagen" src={servicioData.imagenUrl} />

                <div className="frameperfilservicio2">
                    <div className="divperfilservicio2">
                        <div className="text-wrapperperfilservicio2">{servicioData.nombre_usuario}</div>
                    </div>

                    <div className="divperfilservicio2">
                        <div className="text-wrapperperfilservicio2">Precio:</div>
                        <div className="text-wrapper-2perfilservicio2">{servicioData.precio}$</div>
                    </div>
                    <div className="divperfilservicio2">
                        <div className="text-wrapperperfilservicio2">Frecuencia:</div>
                        <div className="text-wrapper-2perfilservicio2">{servicioData.frecuencia}</div>
                    </div>

                    <div className="divperfilservicio2">
                        <div className="text-wrapperperfilservicio2">Duración:</div>
                        <div className="text-wrapper-2perfilservicio2">{servicioData.duracion}</div>
                    </div>

                    <div className="divperfilservicio2">
                        <div className="text-wrapperperfilservicio2">Calificación:</div>
                        <div className="text-wrapper-2perfilservicio2">{servicioData.calificacion}</div>
                    </div>
            
            {/* Componente de Contrataciones */}
            <ContratacionComponent fetchData={fetchData} id_usuario={servicioData.id_usuario}/>

                    </div>
                </div>
            </div>
            </div>
            </div>
              ) : (
                <p>Cargando...</p>
              )}
        
        </div>
    );
};

export default PerfilServicioComponent;