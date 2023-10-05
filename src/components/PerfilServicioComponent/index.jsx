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
import ResponsiveAppBar from '../NavBarMarketplace';

export const PerfilServicioComponent = () => {

    const [open, setOpen] = React.useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false); // Estado para mostrar el Snackbar
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSend = () => {
      // Aquí puedes realizar alguna acción antes de mostrar el Snackbar
      setShowSnackbar(true);
  
      // Configura un temporizador para ocultar el Snackbar después de 4 segundos
      setTimeout(() => {
        setShowSnackbar(false);
      }, 4000);
      setOpen(false);
  
    };

    const [open2, setOpen2] = React.useState(false);
    const [showSnackbar2, setShowSnackbar2] = useState(false); // Estado para mostrar el Snackbar
  
    const handleClickOpen2 = () => {
      setOpen2(true);
    };
  
    const handleClose2 = () => {
      setOpen2(false);
    };
  
    const handleSend2 = () => {
      // Aquí puedes realizar alguna acción antes de mostrar el Snackbar
      setShowSnackbar2(true);
  
      // Configura un temporizador para ocultar el Snackbar después de 4 segundos
      setTimeout(() => {
        setShowSnackbar2(false);
      }, 4000);
      setOpen2(false);
  
    };


    return (

        <div className="div general_perfil_servicio">
            <ResponsiveAppBar />

            <div className="titulo_perfil_servicioooo">Clases de Inglés Intensivas</div>

            <div className="frameperfilservicio">
            <div className="divperfilservicio">
            <div className="text-wrapperperfilservicio"></div>

            <div className="div-2perfilservicio">
                <div className="text-wrapper-2perfilservicio">Biografía:</div>
                <p className="pperfilservicio">
                Soy un hombre que se dedica activamente a dar clases de inglés, ya que es mi pasión, estudié en la UADE y me
                recibí tras 4 años de carrera de Traductor Público. <br />A mis 20 años me fui a vivir a Inglaterra y
                perfeccioné mi idioma realizando un curso en la universidad de Oxford, allí trabajé como interprete de
                diferentes turistas en una asociación de viajes. Luego me desempeñé en Google como traductor y corrector.
                </p>
            </div>
            <div className="div-2perfilservicio">
                <div className="text-wrapper-2perfilservicio">Descripción del servicio:</div>
                <p className="pperfilservicio">
                Estas clases van a durar 3 meses y son 2 clases semanales, en las cuales te dejarán listo para rendir un
                examen de inglés según tu nivel adecuado. Doy clases para todos los niveles y edades. <br />
                Ya sea para niveles iniciales o si estás buscando ir al exterior y necesitas un exámen que avale tu nivel de
                inglés, podés contar conmigo.
                <br />
                No dudes en contactarme!
                </p>
            </div>
            <div className="text-wrapper-3perfilservicio">Comentarios:</div>
            <div className="div-3perfilservicio">
                <div className="div-4perfilservicio">
                <div className="div-wrapperperfilservicio">
                    <div className="text-wrapper-4perfilservicio">Ana Paula:</div>
                </div>
                <div className="div-5perfilservicio">
                    <div className="text-wrapper-5perfilservicio">4.6</div>
                    <div className="text-wrapper-5perfilservicio">⭐</div>
                </div>
                </div>
                <p className="text-wrapper-6perfilservicio">La verdad me encanta el profe! Es un lujo como explica. Lo súper recomiendo!</p>
            
            
            
            
            
            </div>

            {/* este es el boton de comentar, tiene todos los hooks y funciones con un 2 en la terminacion */}
            <button className= "precioperfilservicio2" onClick={handleClickOpen2}>
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
                            defaultValue={0} // Valor inicial (0 estrellas)
                            max={5} // Valor máximo (5 estrellas)
                            precision={1} // Precisión para permitir calificaciones en incrementos de 1
                            />
                        </div>

                            <TextField
                            autoFocus
                            margin="dense"
                            id="nombreyapellidocomentario"
                            label="Nombre y Apellido"
                            type="nombreyapellidocomentario"
                            fullWidth
                            variant="standard"
                        />

                            <TextField
                            autoFocus
                            margin="dense"
                            id="comentario"
                            label="Comentario"
                            type="comentario"
                            fullWidth
                            variant="standard"
                        />

                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose2}>Cancelar</Button>
                        <Button onClick={handleSend2}>Enviar</Button>
                        </DialogActions>
                    </Dialog>

                    {/* Snackbar para mostrar el mensaje de éxito */}
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Posición en la pantalla
                        open={showSnackbar2} // Mostrar el Snackbar cuando showSnackbar sea true
                        autoHideDuration={4000} // Duración en milisegundos
                        onClose={() => setShowSnackbar2(false)} // Función al cerrar el Snackbar
                        message="Se ha enviado tu comentario." // Mensaje de éxito que deseas mostrar
                    />

            </div>
            <div className="frame-wrapperperfilservicio">
            <div className="div-6perfilservicio">
                <img className="imagenperfilservicio" alt="Imagen" src="https://c.animaapp.com/vihGK44O/img/imagen.png" />

                <div className="frameperfilservicio2">
                    <div className="divperfilservicio2">
                        <div className="text-wrapperperfilservicio2">Juan Carlos</div>
                    </div>

                    <div className="divperfilservicio2">
                        <div className="text-wrapperperfilservicio2">Precio:</div>
                        <div className="text-wrapper-2perfilservicio2">$5000/h</div>
                    </div>
                    <div className="divperfilservicio2">
                        <div className="text-wrapperperfilservicio2">Frecuencia:</div>
                        <div className="text-wrapper-2perfilservicio2">2 clases semanales</div>
                    </div>

                    <div className="divperfilservicio2">
                        <div className="text-wrapperperfilservicio2">Calificación:</div>
                        <div className="text-wrapper-2perfilservicio2">4.5 (23 opiniones)</div>
                    </div>



                {/* este es el boton de contactar, tiene todos los hooks y funciones SIN terminar en un 2 */}

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

                    {/* Snackbar para mostrar el mensaje de éxito */}
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Posición en la pantalla
                        open={showSnackbar} // Mostrar el Snackbar cuando showSnackbar sea true
                        autoHideDuration={4000} // Duración en milisegundos
                        onClose={() => setShowSnackbar(false)} // Función al cerrar el Snackbar
                        message="Se ha enviado tu solicitud para el servicio." // Mensaje de éxito que deseas mostrar
                    />
                    </div>




                </div>

            </div>
            </div>
        </div>
    );
};

export default PerfilServicioComponent