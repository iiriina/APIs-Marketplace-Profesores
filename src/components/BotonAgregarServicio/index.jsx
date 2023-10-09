import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
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
      setShowSnackbar3(true);
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

        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
            open={showSnackbar3} 
            autoHideDuration={4000} 
            onClose={() => setShowSnackbar3(false)} 
            message="El servicio ha sido agregado."
        />


    </div>
    );
}
