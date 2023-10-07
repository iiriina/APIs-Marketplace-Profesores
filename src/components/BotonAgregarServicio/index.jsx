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
export default function BotonAgregarServicio() {

    const [open3, setOpen3] = React.useState(false);
    const [showSnackbar3, setShowSnackbar3] = useState(false); // Estado para mostrar el Snackbar
  
    const handleClickOpen3 = () => {
      setOpen3(true);
    };
  
    const handleClose3 = () => {
      setOpen3(false);
    };
  
    const handleSend3 = () => {
      // Aquí puedes realizar alguna acción antes de mostrar el Snackbar
      setShowSnackbar3(true);
  
      // Configura un temporizador para ocultar el Snackbar después de 4 segundos
      setTimeout(() => {
        setShowSnackbar3(false);
      }, 4000);
      setOpen3(false);
  
    };

  return (
    <div className="divgeneralbotoncito">


    <button className= "precioperfilservicio3" onClick={handleClickOpen3}>
        Crear Servicio ✏️
        </button>
        <Dialog open={open3} onClose={handleClose3}>
            <DialogTitle>Crear servicio</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Completa la información de tu nuevo servicio.
            </DialogContentText>

                <TextField
                autoFocus
                margin="dense"
                id="experiencia_servicio"
                label="Experiencia en relación con el Servicio"
                type="experiencia_servicio"
                fullWidth
                variant="standard"
            />

                <TextField
                autoFocus
                margin="dense"
                id="descripcion_servicio"
                label="Descripción del Servicio"
                type="descripcion_servicio"
                fullWidth
                variant="standard"
            />
            
            <TextField
                autoFocus
                margin="dense"
                id="duracion"
                label="Duración"
                type="duracion"
                fullWidth
                variant="standard"
            />

            <TextField
                autoFocus
                margin="dense"
                id="frecuencia"
                label="Frecuencia"
                type="frecuencia"
                fullWidth
                variant="standard"
            />
            <TextField
                autoFocus
                margin="dense"
                id="costo"
                label="Costo"
                type="costo"
                fullWidth
                variant="standard"
            />


            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose3}>Cancelar</Button>
            <Button onClick={handleSend3}>Enviar</Button>
            </DialogActions>
        </Dialog>

        {/* Snackbar para mostrar el mensaje de éxito */}
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Posición en la pantalla
            open={showSnackbar3} // Mostrar el Snackbar cuando showSnackbar sea true
            autoHideDuration={4000} // Duración en milisegundos
            onClose={() => setShowSnackbar3(false)} // Función al cerrar el Snackbar
            message="El servicio ha sido agregado." // Mensaje de éxito que deseas mostrar
        />


    </div>
    );
}
