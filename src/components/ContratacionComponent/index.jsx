import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import { crearContratacion } from '../controller/crearContratacionController';

const ContratacionComponent = ({ fetchData, id_usuario }) => {
  const [open, setOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [nombreApellidoValue, setNombreApellidoValue] = useState('');
  const [telefonoValue, setTelefonoValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [horarioFechaValue, setHorarioFechaValue] = useState('');
  const [motivosValue, setMotivosValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = async () => {
    const contratacionData = {
      id_usuario: id_usuario,
      nombre_estudiante: nombreApellidoValue,
      telefono: telefonoValue,
      email: emailValue,
      horarios: horarioFechaValue,
      motivos: motivosValue,
    };
  
    const resultado = await crearContratacion(contratacionData);
  
    if (resultado.rdo === 0) {
      setOpen(false); // Cerrar el formulario
      setShowSnackbar(true);
      fetchData(); // Actualizar datos después de enviar la contratación
  
      // Restablecer valores de los campos a cadena vacía
      setNombreApellidoValue('');
      setTelefonoValue('');
      setEmailValue('');
      setHorarioFechaValue('');
      setMotivosValue('');
  
      // Temporizador para ocultar el Snackbar después de 4000 ms
      setTimeout(() => {
        setShowSnackbar(false);
      }, 4000);
    } else {
        window.alert(`Error creando contratación: ${resultado.mensaje}`);
    }
  };
  
  return (
    <div>
      <button className="precioperfilservicio2" onClick={handleClickOpen}>
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
            id="nombreApellido"
            label="Nombre y Apellido"
            type="text"
            fullWidth
            variant="standard"
            value={nombreApellidoValue}
            onChange={(event) => setNombreApellidoValue(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="telefono"
            label="Teléfono"
            type="text"
            fullWidth
            variant="standard"
            value={telefonoValue}
            onChange={(event) => setTelefonoValue(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="horarioFecha"
            label="Horarios para contactarte"
            type="text"
            fullWidth
            variant="standard"
            value={horarioFechaValue}
            onChange={(event) => setHorarioFechaValue(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="motivos"
            label="Motivos del contacto"
            type="text"
            fullWidth
            variant="standard"
            value={motivosValue}
            onChange={(event) => setMotivosValue(event.target.value)}
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
  );
};

export default ContratacionComponent;
