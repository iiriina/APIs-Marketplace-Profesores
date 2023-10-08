import React from "react";
import ResponsiveAppBarlogeado from "../components/NavBarMarketplacelogeado";
import BuscarServicioLogueadoComponent from "../components/BuscarServicioComponent copy";

const BuscarServiciosLogueado = ({ isLoggedIn }) => {
    return (
      <>
          <ResponsiveAppBarlogeado /> 
        <BuscarServicioLogueadoComponent />
      </>
    );
  };
  
  export default BuscarServiciosLogueado;