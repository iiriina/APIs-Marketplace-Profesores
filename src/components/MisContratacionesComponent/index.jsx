import * as React from 'react';
import { useState } from 'react';
import TarjetaContratacion from '../TarjetaContratacion';
import ResponsiveAppBarlogeado from '../NavBarMarketplacelogeado';


export default function MisContratacionesComponent() {
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
