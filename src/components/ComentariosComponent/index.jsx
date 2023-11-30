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
import { hacerComentario } from '../controller/hacerComentarioController';

const ComentariosComponent = ({ id_servicio, servicioData, fetchData }) => {
  const [open, setOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [nombreEstudianteValue, setNombreEstudianteValue] = useState('');
  const [comentarioValue, setComentarioValue] = useState('');
  const [calificacionValue, setCalificacionValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = async () => {
    const comentarioData = {
      id_servicio: id_servicio,
      id_usuario: servicioData.id_usuario,
      nombre_estudiante: nombreEstudianteValue,
      comentario: comentarioValue,
      calificacion: calificacionValue,
    };

    const resultado = await hacerComentario(comentarioData);

    if (resultado.rdo === 0) {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 4000);
      setOpen(false);
      fetchData(); // Actualizar datos después de enviar el comentario
              // Restablecer valores de los campos a cadena vacía y 0
      setNombreEstudianteValue('');
      setComentarioValue('');
      setCalificacionValue(0);

    } else {
      window.alert(`Error haciendo comentario: ${resultado.mensaje}`);
    }
  };

  return (
    <div>
      <button className="precioperfilservicio2" onClick={handleClickOpen}>
        Hacer Comentario
      </button>
      <Dialog open={open} onClose={handleClose}>
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
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSend}>Enviar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={showSnackbar}
        autoHideDuration={4000}
        onClose={() => setShowSnackbar(false)}
        message="Se ha enviado tu comentario."
      />
    </div>
  );
};

export default ComentariosComponent;
