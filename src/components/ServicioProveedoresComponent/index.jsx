import React, { useState, useEffect } from "react";
import TarjetaServicio from "../TarjetaServicio";
import BotonAgregarServicio from "../BotonAgregarServicio";
import { mostrarServiciosDeProfe } from "../controller/mostrarServiciosDeProfe";

const ServicioProveedoresComponent = () => {
  const [servicios, setServicios] = useState(null);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await mostrarServiciosDeProfe();
        setServicios(response.data);
      } catch (error) {
        console.error("Error al obtener servicios desde la base de datos:", error);
        setServicios([]); // En caso de error, establece servicios en una matriz vacía
      }
    };
    // Llama a la función al montar el componente
    fetchServicios();

    // Establece un intervalo para llamar a la función cada 10 segundos
    const intervalId = setInterval(fetchServicios, 10000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="frameservicios">
      <div className="text-wrapperservicios">
        <div>Mis Servicios</div>
        <BotonAgregarServicio />
      </div>
      {servicios === null ? (
        <p className="cargandoo">Cargando...</p>
      ) : servicios.length === 0 ? (
        <div>
        <p className="titulo_inicio">🌺 Bienvenido Profe! 🥇</p>

        <p className="no_hay">Publica un nuevo servicio 👆💜!</p>
        </div>
      ) : (
        servicios.map((servicio) => (
          <TarjetaServicio
            key={servicio._id}
            id_servicio={servicio._id}
            nombre_servicio={servicio.nombre_servicio}
            tipo_clase={servicio.tipo_de_clase}
            duracion={servicio.duracion}
            precio={servicio.precio}
            biografia={servicio.descripcion}
            visibilidad={servicio.visibilidad}
          />
        ))
      )}
    </div>
  );
};

export default ServicioProveedoresComponent;
