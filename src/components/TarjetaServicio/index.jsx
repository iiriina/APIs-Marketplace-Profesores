import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const TarjetaServicio = ({ clase, tipo_clase, duracion, precio, biografia }) => {
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
    <div className="tagservicios">
      <div className="divservicios">
        <div className="div-2servicios">
          <div className="text-wrapper-2servicios">{clase}</div>
          <div className="div-wrapperservicios">
            <div className="text-wrapper-3servicios">{tipo_clase}</div>
          </div>
          <div className="div-wrapperservicios">
            <div className="text-wrapper-3servicios">{duracion}</div>
          </div>
          <div className="tag-precioservicios">
            <div className="text-wrapper-3servicios">${precio}/h</div>
          </div>
          <div className="div-wrapperboton">
            <div className="text-wrapper-3servicios"><Button>PUBLICAR</Button></div>
          </div>
        </div>
        <p className="pservicios">
          {biografia}
        </p>
      </div>
      <div className="div-3servicios">
        <button onClick={handleClickOpen3} className="botn-modificarservicios">
          <div className="placeholder-wrapperservicios">
            <div className="placeholderservicios">Modificar Servicio</div>
          </div>
        </button>

        <Dialog open={open3} onClose={handleClose3}>
          <DialogTitle>Modificar servicio</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Completa los campos que querías modificar.
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
            <p></p>
            <Button variant="text" onSubmit={{/*Agregar funcionalidad */}}>Insertar Imagen</Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose3}>Cancelar</Button>
            <Button onClick={handleSend3}>Enviar</Button>
          </DialogActions>
        </Dialog>

        <button className="botn-modificarservicios">
          <div className="placeholder-wrapperservicios">
            <div className="placeholder-2servicios">Eliminar Servicio</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TarjetaServicio;
