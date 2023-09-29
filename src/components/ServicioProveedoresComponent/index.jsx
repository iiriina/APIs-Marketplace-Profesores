import React from "react";
import NavBarApis from "../NavBarApis";
import TarjetaServicio from "../TarjetaServicio";
export const ServicioProveedoresComponent = () => {
    return (
    <div>

    <NavBarApis />
    {/* ponerle props a esto para poder tener diferentes tarjetitas con distintas fotitos y distintas descripciones */}
    <TarjetaServicio />




    </div>
    );
};

export default ServicioProveedoresComponent