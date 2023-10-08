import React from "react";
import ResponsiveAppBarlogeado from "../components/NavBarMarketplacelogeado";
import BuscarServicioLogueadoComponent from "../components/BuscarServicioLogueadoComponent";

const BuscarServiciosLogueado = ({ isLoggedIn }) => {
    return (
      <>
          <ResponsiveAppBarlogeado /> 
        <BuscarServicioLogueadoComponent />
      </>
    );
  };
  
  export default BuscarServiciosLogueado;