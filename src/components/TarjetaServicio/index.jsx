import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { InputAdornment } from "@mui/material";

export const TarjetaServicio = () => {
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
          <div className="text-wrapper-2servicios">Inglés</div>
          <div className="div-wrapperservicios">
            <div className="text-wrapper-3servicios">Grupal</div>
          </div>
          <div className="div-wrapperservicios">
            <div className="text-wrapper-3servicios">Mensual</div>
          </div>
          <div className="tag-precioservicios">
            <div className="text-wrapper-3servicios">$5000/h</div>
          </div>
        </div>
        <p className="pservicios">
          Estudiante de traductorado público, apasionada por los idiomas desde
          pequeña. Me encuentro dando clases de inglés hace 2 años. No dudes en
          contactarme!
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

            <TextField
              autoFocus
              margin="Imagen"
              id="Imagen"
              label="Imagen"
              type="Imagen"
              fullWidth
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="text">Insertar Imagen</Button>
                  </InputAdornment>
                ),
              }}
            />
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
