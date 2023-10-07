import React from "react";
import NavBarApis from "../components/NavBarApis";
import BuscarServicioComponent from "../components/BuscarServicioComponent";
import ResponsiveAppBarlogeado from "../components/NavBarMarketplacelogeado";
import ResponsiveAppBar from "../components/NavBarMarketplace";
import BuscarServicioLogueadoComponent from "../components/BuscarServicioComponent copy";

const BuscarServiciosLogueadoPage = ({ isLoggedIn }) => {
    return (
      <div>
          <ResponsiveAppBarlogeado /> 

        <BuscarServicioLogueadoComponent />
      </div>
    );
  };
  
  export default BuscarServiciosLogueadoPage;
