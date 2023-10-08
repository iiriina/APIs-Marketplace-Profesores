import * as React from 'react';
import ResponsiveAppBar from '../NavBarMarketplace';
import { useState } from 'react';
import { onClick } from 'react';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const TarjetaContratacion = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(''); 
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      handleClose();
    };

    
    return (
    <div className="divcontrataciones">
        <div className="frame-wrappercontrataciones">
        <div className="div-wrappercontrataciones">
            <div className="text-wrapper-2contrataciones">María Ríos</div>
        </div>
        </div>
        <div className="div-2contrataciones">
        <div className="text-wrapper-3contrataciones">Teléfono:</div>
        <div className="text-wrapper-4contrataciones">1160369204</div>
        </div>
        <div className="div-3contrataciones">
        <div className="text-wrapper-5contrataciones">Mail:</div>
        <div className="text-wrapper-4contrataciones">mariarios@gmail.com</div>
        </div>
        <div className="div-2contrataciones">
        <p className="text-wrapper-4contrataciones">Lunes a Viernes 14 hs.</p>
        </div>
        <p className="pcontrataciones">
        Hola! Quiero un turno por favor para ingles tengo que rendir en diciembre una materia que debo del
        secundario.
        </p>




        <button
        className="tag-preciocontrataciones"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        >
        {selectedOption || 'Pendiente'} 
        </button>
        
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        <MenuItem onClick={() => handleOptionSelect('Aceptado')}>Aceptado</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('Finalizado')}>Finalizado</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('Cancelado')}>Cancelado</MenuItem>
        </Menu>
    </div>
    );
};

export default TarjetaContratacion