import React from "react";
import TarjetaServicio from "../TarjetaServicio";
import BotonAgregarServicio from "../BotonAgregarServicio";

export const ServicioProveedoresComponent = () => {
    return (

        <div className="frameservicios">
        <div className="text-wrapperservicios">
            <div>Mis Servicios</div>             
            <BotonAgregarServicio />
        </div>
            <TarjetaServicio />
            <TarjetaServicio />
            <TarjetaServicio />
            <TarjetaServicio />
        </div>
    );
};

export default ServicioProveedoresComponent;