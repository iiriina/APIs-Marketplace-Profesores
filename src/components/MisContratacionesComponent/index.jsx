import * as React from 'react';
import { useState } from 'react';
import TarjetaContratacion from '../TarjetaContratacion';
import ResponsiveAppBar from '../NavBarMarketplace';


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
      <ResponsiveAppBar />
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
