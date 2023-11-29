/* import React from "react";
import PerfilServicioComponent from "../components/PerfilServicioComponent";
import ResponsiveAppBar from "../components/NavBarMarketplace";

const PerfilServicio = () => {
    return (
      <>
        <ResponsiveAppBar />
        <PerfilServicioComponent />
      </>
    );
  };
  
  export default PerfilServicio; */

import React from "react";
import { useLocation } from "react-router-dom";
import PerfilServicioComponent from "../components/PerfilServicioComponent";
import ResponsiveAppBar from "../components/NavBarMarketplace";

const PerfilServicio = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id_servicio = searchParams.get("id_servicio");

  return (
    <>
      <ResponsiveAppBar />
      <PerfilServicioComponent id_servicio={id_servicio} />
    </>
  );
};

export default PerfilServicio;
