import * as React from 'react';
import { useState } from 'react';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { cambiarEstadoContratacion } from '../controller/cambiarEstadoContratacionController';

const TarjetaContratacion = ({ id_contratacion, nombre_estudiante, telefono, email, horarios, motivos, estado }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(estado);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = async (option) => {
    // Actualiza el estado local antes de la llamada a la función
    setSelectedOption(option);
    handleClose();

    // Llama a la función para cambiar el estado en la base de datos
    try {
      const resultado = await cambiarEstadoContratacion({
        id_contratacion: id_contratacion,
        estado: option,
      });

      if (resultado.rdo === 0) {
        // Manejar la actualización exitosa del estado
        console.log('Estado actualizado exitosamente:', resultado.mensaje);
      } else {
        // Manejar el error al actualizar el estado
        console.error('Error al actualizar el estado:', resultado.mensaje);
      }
    } catch (error) {
      // Manejar errores de la llamada a la función
      console.error('Error al llamar a cambiarEstadoContratacion:', error.message);
    }
  };

    return (
      <div className="divcontrataciones">
        <div className="frame-wrappercontrataciones">
          <div className="div-wrappercontrataciones">
            <div className="text-wrapper-2contrataciones">{nombre_estudiante}</div>
          </div>
        </div>
        <div className="div-2contrataciones">
          <div className="text-wrapper-3contrataciones">Teléfono:</div>
          <div className="text-wrapper-4contrataciones">{telefono}</div>
        </div>
        <div className="div-3contrataciones">
          <div className="text-wrapper-5contrataciones">Mail:</div>
          <div className="text-wrapper-4contrataciones">{email}</div>
        </div>
        <div className="div-2contrataciones">
          <p className="text-wrapper-4contrataciones">{horarios}</p>
        </div>
        <p className="pcontrataciones">{motivos}</p>
  
        <button
          className="tag-preciocontrataciones"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {selectedOption || estado} 
        </button>
        
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleOptionSelect('solicitada')}>Solicitada</MenuItem>
          <MenuItem onClick={() => handleOptionSelect('aceptada')}>Aceptada</MenuItem>
          <MenuItem onClick={() => handleOptionSelect('finalizada')}>Finalizada</MenuItem>
          <MenuItem onClick={() => handleOptionSelect('cancelada')}>Cancelada</MenuItem>
        </Menu>
      </div>
    );
};

export default TarjetaContratacion;
