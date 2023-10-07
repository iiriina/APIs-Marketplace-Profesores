import React from "react";
import NavBarApis from "../../components/NavBarApis";
import BuscarServicioComponent from "../../components/BuscarServicioComponent";
import ResponsiveAppBarlogeado from "../../components/NavBarMarketplacelogeado";
import ResponsiveAppBar from "../../components/NavBarMarketplace";

const BuscarServiciosPage = ({ isLoggedIn }) => {
    return (
      <div>

        <ResponsiveAppBar />
        <BuscarServicioComponent />
        
      </div>
    );
  };
  
  export default BuscarServiciosPage;
