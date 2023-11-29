import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Rating from '@mui/material/Rating';
import {useEffect } from 'react';

import { getServicioPorIdServicio } from '../controller/getServicioPorIdServicio';
import { hacerComentario } from '../controller/hacerComentarioController';

export const PerfilServicioComponent = ({ id_servicio }) => {
  const [servicioData, setServicioData] = useState(null);
  const [open, setOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
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

    fetchData();
  }, [id_servicio]);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSend = () => {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 4000);
      setOpen(false);
  
    };

    const [open2, setOpen2] = React.useState(false);
    const [showSnackbar2, setShowSnackbar2] = useState(false); 
    const [nombreEstudianteValue, setNombreEstudianteValue] = useState('');
    const [comentarioValue, setComentarioValue] = useState('');
    const [calificacionValue, setCalificacionValue] = useState('');

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleSend2 = async () => {
    const comentarioData = {
      id_servicio: id_servicio,
      id_usuario: servicioData.id_usuario,
      nombre_estudiante: nombreEstudianteValue,
      comentario: comentarioValue,
      calificacion: calificacionValue,
    };

    const resultado = await hacerComentario(comentarioData);

    if (resultado.rdo === 0) {
      setShowSnackbar2(true);
      setTimeout(() => {
        setShowSnackbar2(false);
      }, 4000);
      setOpen2(false);
    } else {
      console.error('Error haciendo el comentario:', resultado.mensaje);
    }
  };


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

            <button className="precioperfilservicio2" onClick={handleClickOpen2}>
            Hacer Comentario
            </button>
            <Dialog open={open2} onClose={handleClose2}>
            <DialogTitle>Comentario</DialogTitle>
            <DialogContent>
                <DialogContentText>
                Deja un comentario. <br /> Recuerda ser amable ❤️!
                </DialogContentText>

                <div className="div_precio_perfil_2_rating" style={{ display: 'flex', alignItems: 'center' }}>
                <span className="span_precio_perfil_2_rating" style={{ marginRight: '8px' }}>Calificación:</span>
                <Rating
                    name="calificacion"
                    defaultValue={0}
                    max={5}
                    precision={1}
                    onChange={(event, value) => setCalificacionValue(value)}
                />
                </div>

                <TextField
                autoFocus
                margin="dense"
                id="nombre"
                label="Nombre y Apellido"
                type="nombre"
                fullWidth
                variant="standard"
                onChange={(event) => setNombreEstudianteValue(event.target.value)}
                />

                <TextField
                autoFocus
                margin="dense"
                id="comentario"
                label="Comentario"
                type="comentario"
                fullWidth
                variant="standard"
                onChange={(event) => setComentarioValue(event.target.value)}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose2}>Cancelar</Button>
                <Button onClick={handleSend2}>Enviar</Button>
            </DialogActions>
            </Dialog>

            <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={showSnackbar2}
            autoHideDuration={4000}
            onClose={() => setShowSnackbar2(false)}
            message="Se ha enviado tu comentario."
            />


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

                    <button className= "precioperfilservicio2" onClick={handleClickOpen}>
                        Contactar
                    </button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Pedido de Clase</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Por favor, completa los siguientes datos. <br /> El profesor se comunicará contigo en breve.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="nombreyapellido"
                            label="Nombre y Apellido"
                            type="nombreyapellido"
                            fullWidth
                            variant="standard"
                        />
                            <TextField
                            autoFocus
                            margin="dense"
                            id="telefono"
                            label="Telefono"
                            type="telefono"
                            fullWidth
                            variant="standard"
                        />
                            <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                            <TextField
                            autoFocus
                            margin="dense"
                            id="horarioyfecha"
                            label="Horarios para contactarte"
                            type="horarioyfecha"
                            fullWidth
                            variant="standard"
                        />
                            <TextField
                            autoFocus
                            margin="dense"
                            id="motivos"
                            label="Motivos del contacto"
                            type="motivos"
                            fullWidth
                            variant="standard"
                        />

                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={handleSend}>Enviar</Button>
                        </DialogActions>
                    </Dialog>

                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
                        open={showSnackbar} 
                        autoHideDuration={4000} 
                        onClose={() => setShowSnackbar(false)} 
                        message="Se ha enviado tu solicitud para el servicio."
                        />
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