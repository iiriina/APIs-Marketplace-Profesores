import React from "react";
import BuscarServicioComponent from "../components/BuscarServicioComponent";
import ResponsiveAppBar from "../components/NavBarMarketplace";

const BuscarServicios = ({ isLoggedIn }) => {
    return (
      <>
        <ResponsiveAppBar />
        <BuscarServicioComponent />
      </>
    );
  };
  
  export default BuscarServicios;