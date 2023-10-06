import React from "react";
import NavBarApis from "../../components/NavBarApis";
import BuscarServicioComponent from "../../components/BuscarServicioComponent";
import ResponsiveAppBarlogeado from "../../components/NavBarMarketplacelogeado";
import ResponsiveAppBar from "../../components/NavBarMarketplace";

const BuscarServiciosPage = ({ isLoggedIn }) => {
    return (
      <div>
          {console.log(isLoggedIn)}
          {/* Renderiza la barra de navegación según si el usuario está loggeado o no */}
          {isLoggedIn ? <ResponsiveAppBarlogeado /> : <ResponsiveAppBar />}

        <BuscarServicioComponent />
      </div>
    );
  };
  
  export default BuscarServiciosPage;
