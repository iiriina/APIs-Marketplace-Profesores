import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { modificarServicio } from "../controller/modificarServicioController";
import { guardarCambiosServicio } from "../controller/guardarCambiosServicioController";
import { eliminarServicio } from "../controller/eliminarServicioController";
import { cambiarVisibilidadServicio } from "../controller/cambiarVisibilidadServicioController";

const TarjetaServicio = ({ id_servicio, nombre_servicio, tipo_clase, duracion, precio, biografia, visibilidad }) => {
  const [open3, setOpen3] = React.useState(false);
  const [showSnackbar3, setShowSnackbar3] = useState(false); // Estado para mostrar el Snackbar
  const [selectedImage, setSelectedImage] = useState(null);
  const [nombreServicio, setNombreServicio] = useState('');
  const [descripcionServicio, setDescripcionServicio] = useState('');
  const [duracionServicio, setDuracionServicio] = useState('');
  const [frecuenciaServicio, setFrecuenciaServicio] = useState('');
  const [costoServicio, setCostoServicio] = useState('');
  const [categoriaServicio, setCategoriaServicio] = useState('');
  const [tipoDeClaseServicio, setTipoDeClaseServicio] = useState('');
  const [publicado, setPublicado] = useState(visibilidad === 'publico');

  const handleClickOpen3 = async () => {
    try {
      const idServicio = id_servicio;
      const respuestaBdd = await modificarServicio(idServicio);
      const servicio = respuestaBdd.data;

      // Actualizar los estados con la información del servicio
      setNombreServicio(servicio.nombre_servicio || '');
      setDescripcionServicio(servicio.descripcion || '');
      setDuracionServicio(servicio.duracion || '');
      setFrecuenciaServicio(servicio.frecuencia || '');
      setCostoServicio(servicio.precio || '');
      setCategoriaServicio(servicio.categoria || '');
      setTipoDeClaseServicio(servicio.tipo_de_clase || '');
      console.log("valores servicio:", servicio);
      setOpen3(true);
    } catch (error) {
      console.error('Error al obtener el servicio:', error);
    }
  };
  
  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleSend3 = async () => {
    try {
      // Aquí deberías llamar a una función de tu controlador para guardar los datos
      const exito = await guardarCambiosServicio({
        _id: id_servicio,
        nombre_servicio: nombreServicio,
        descripcion: descripcionServicio,
        duracion: duracionServicio,
        frecuencia: frecuenciaServicio,
        precio: costoServicio,
        categoria: categoriaServicio,
        tipo_de_clase: tipoDeClaseServicio,
        imagen: selectedImage
      });
  
      if (exito) {
        console.log('Servicio guardado exitosamente en la base de datos');
        // Puedes realizar otras acciones después de guardar, como cerrar el diálogo
        setShowSnackbar3(true);
        setTimeout(() => {
          setShowSnackbar3(false);
        }, 4000);
        setOpen3(false);
      } else {
        console.error('Error al guardar el servicio en la base de datos');
        // Maneja el caso en el que no se pudo guardar el servicio
      }
    } catch (error) {
      console.error('Error al guardar el servicio en la base de datos:', error);
      // Maneja otros errores que puedan ocurrir durante el proceso de guardar
    }
  };

  const handleEliminarServicio = async () => {
    try {
      // Llama a la función para eliminar el servicio
      const resultadoEliminacion = await eliminarServicio(id_servicio);
  
      if (resultadoEliminacion) {
        // Muestra una alerta si el servicio se eliminó exitosamente
        window.alert('Servicio eliminado exitosamente.');
        // Realiza acciones adicionales si es necesario
      } else {
        // Muestra una alerta si no se pudo eliminar el servicio
        window.alert('Error al eliminar el servicio');
        // Maneja el caso en el que no se pudo eliminar el servicio
      }
    } catch (error) {
      // Muestra una alerta en caso de error
      window.alert('Error al eliminar servicio.');
      // Maneja otros errores que puedan ocurrir durante el proceso de eliminación
    }
  };
  
  const handleVisibilidad = async () => {
    try {
      // Llama a la función que cambia la visibilidad del servicio
      const exito = await cambiarVisibilidadServicio({
        _id: id_servicio,
        visibilidad: publicado ? 'privado' : 'publico', // Cambiar el estado "publicado", si es true pasa a privado si 
        //es false pasa a publico
      });
  
      if (exito.rdo === 0) {
        console.log('Visibilidad del servicio cambiada exitosamente');
        // Actualiza el estado para reflejar el cambio
        setPublicado(!publicado);
      } else {
        console.error('Error al cambiar la visibilidad del servicio:', exito.mensaje);
      }
    } catch (error) {
      console.error('Error al cambiar la visibilidad del servicio:', error);
    }
  };
  

  return (
    <div className="tagservicios">
      <div className="divservicios">
        <div className="div-2servicios">
          <div className="text-wrapper-2servicios">{nombre_servicio}</div>
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
            <div className="text-wrapper-3servicios">
            <button
              className={`boton_publicar ${publicado ? 'publicado' : 'no-publicado'}`}
              onClick={handleVisibilidad}
            >
              {publicado ? 'DESPUBLICAR' : 'PUBLICAR'}
            </button>
            
            </div>
          </div>
        </div>
        <p className="pservicios">{biografia}</p>
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
              id="nombre_servicio"
              label="Nombre del Servicio"
              type="nombre_servicio"
              fullWidth
              variant="standard"
              required
              value={nombreServicio}
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
              value={descripcionServicio}
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
              value={duracionServicio}
              onChange={(e) => setDuracionServicio(e.target.value)}
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
              value={frecuenciaServicio}
              onChange={(e) => setFrecuenciaServicio(e.target.value)}
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
              value={costoServicio}
              onChange={(e) => setCostoServicio(e.target.value)}
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
              value={categoriaServicio}
              onChange={(e) => setCategoriaServicio(e.target.value)}
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
              value={tipoDeClaseServicio}
              onChange={(e) => setTipoDeClaseServicio(e.target.value)}
            />
            <p></p>

            <DialogContentText>
              Elegí una imágen para el servicio:
            </DialogContentText>
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

        <button onClick={handleEliminarServicio} className="botn-modificarservicios">
          <div className="placeholder-wrapperservicios">
            <div className="placeholder-2servicios">Eliminar Servicio</div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default TarjetaServicio;
