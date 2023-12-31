import * as React from 'react';
import { useState } from 'react';
import { onClick } from 'react';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TarjetaContratacion from '../TarjetaContratacion';
import ResponsiveAppBarlogeado from '../NavBarMarketplacelogeado';
export default function MisContratacionesComponent() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(''); // Estado para almacenar la opción seleccionada

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
    <div className="divgeneralcontrataciones">
    
    <ResponsiveAppBarlogeado />

    <div className="framecontrataciones">
    <div className="text-wrappercontrataciones">Mis Contrataciones</div>
    <div className="tagcontrataciones">

      <TarjetaContratacion />
      <TarjetaContratacion />
      <TarjetaContratacion />
      <TarjetaContratacion />
      <TarjetaContratacion />

      
    </div>
  </div>
    </div>
    );
}
