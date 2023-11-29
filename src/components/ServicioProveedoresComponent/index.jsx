
import React, { useState, useEffect } from "react";
import TarjetaServicio from "../TarjetaServicio";
import BotonAgregarServicio from "../BotonAgregarServicio";
import { mostrarServiciosDeProfe } from "../controller/mostrarServiciosDeProfe"; // Reemplaza con la ruta correcta

export const ServicioProveedoresComponent = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Llama a la función que obtiene los servicios desde la base de datos
    mostrarServiciosDeProfe()
      .then((response) => response.data) // Accede a la propiedad 'data'
      .then((serviciosDesdeBD) => {
        setServicios(serviciosDesdeBD);
      })
      .catch((error) => {
        console.error("Error al obtener servicios desde la base de datos:", error);
      });
  }, []); 

  return (
    <div className="frameservicios">
      <div className="text-wrapperservicios">
        <div>Mis Servicios</div>
        <BotonAgregarServicio />
      </div>
      {Array.isArray(servicios) && servicios.map((servicio) => (
        <TarjetaServicio
          key={servicio._id} 
          id_servicio = {servicio._id}
          nombre_servicio={servicio.nombre_servicio}
          tipo_clase={servicio.tipo_de_clase}
          duracion={servicio.duracion}
          precio={servicio.precio}
          biografia={servicio.descripcion}
        />
      ))}
    </div>
  );
};

export default ServicioProveedoresComponent;
