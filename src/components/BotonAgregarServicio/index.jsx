import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';

import { crearNuevoServicio } from '../controller/agregarServicioController';

export default function BotonAgregarServicio() {
  const [open3, setOpen3] = useState(false);
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [nombreServicio, setNombreServicio] = useState('');
  const [descripcionServicio, setDescripcionServicio] = useState('');
  const [duracion, setDuracion] = useState('');
  const [frecuencia, setFrecuencia] = useState('');
  const [costo, setCosto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo_de_clase, set_tipo_de_clase] = useState('');

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
    // Resetear el estado del Snackbar al cerrar el diálogo
    setShowSnackbar(false);
  };

  const handleSend3 = async () => {
    try {
      if (!nombreServicio || !descripcionServicio || !duracion || !frecuencia || !costo || !categoria || !tipo_de_clase || !selectedImage) {
        window.alert('Completa todos los campos obligatorios.');
        return;
      }
  
      const cambio = {
        nombre_servicio: nombreServicio,
        descripcion: descripcionServicio,
        duracion: duracion,
        frecuencia: frecuencia,
        calificacion: 0,
        precio: costo,
        categoria: categoria,
        tipo_de_clase: tipo_de_clase,
        imagen: selectedImage,
      };

      const resultado = await crearNuevoServicio(cambio);

      if (resultado.rdo === 0) {
        setShowSuccessSnackbar(true);
        setTimeout(() => {
          setShowSuccessSnackbar(false);
        }, 4000);
        setOpen3(false);
      } else {
        setShowErrorSnackbar(true);
        setOpen3(false);
        console.error('Error al crear el servicio:', resultado.mensaje);
      }
    } catch (error) {
      setShowErrorSnackbar(true);
      setOpen3(false);
      console.error('Error en el manejo de la solicitud:', error);
    }
  };

  return (
    <div className="divgeneralbotoncito">
      <button className="precioperfilservicio3" onClick={handleClickOpen3}>
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
            id="nombre_servicio"
            label="Nombre del Servicio"
            type="nombre_servicio"
            fullWidth
            variant="standard"
            required
            onChange={(e) => setNombreServicio(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="descripcion_servicio"
            label="Descripción del Servicio"
            type="descripcion_servicio"
            fullWidth
            variant="standard"
            required
            onChange={(e) => setDescripcionServicio(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="duracion"
            label="Duración"
            type="duracion"
            fullWidth
            variant="standard"
            required
            onChange={(e) => setDuracion(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="frecuencia"
            label="Frecuencia"
            type="frecuencia"
            fullWidth
            variant="standard"
            required
            onChange={(e) => setFrecuencia(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="costo"
            label="Costo"
            type="costo"
            fullWidth
            variant="standard"
            required
            onChange={(e) => setCosto(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="categoria"
            label="Categoria"
            type="categoria"
            fullWidth
            variant="standard"
            required
            onChange={(e) => setCategoria(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="tipo_de_clase"
            label="Tipo de Clase"
            type="tipo_de_clase"
            fullWidth
            variant="standard"
            required
            onChange={(e) => set_tipo_de_clase(e.target.value)}
          />


          <DialogContentText>Elegí una imágen para el servicio:</DialogContentText>
          <input
            className="input_insertarimg"
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3}>Cancelar</Button>
          <Button onClick={handleSend3}>Enviar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={showSuccessSnackbar}
        autoHideDuration={4000}
        onClose={() => setShowSuccessSnackbar(false)}
        message="El servicio ha sido agregado con éxito."
      />

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={showErrorSnackbar}
        autoHideDuration={4000}
        onClose={() => setShowErrorSnackbar(false)}
        message="No se pudo agregar el servicio."
      />
    </div>
  );
}
