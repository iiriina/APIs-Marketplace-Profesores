
/* import * as React from 'react';
import { useState, useEffect } from 'react';
import TarjetaContratacion from '../TarjetaContratacion';
import ResponsiveAppBar from '../NavBarMarketplace';
import { mostrarContrataciones } from '../controller/mostrarContratacionesController';

export default function MisContratacionesComponent() {
  const [contrataciones, setContrataciones] = useState([]);

  useEffect(() => {
    const fetchContrataciones = async () => {
      try {
        const response = await mostrarContrataciones();
        setContrataciones(response.data);
      } catch (error) {
        console.error("Error al obtener contrataciones:", error.message);
        setContrataciones([]);
      }
    };

    fetchContrataciones();
  }, []);

  return (
    <div className="divgeneralcontrataciones">
      <ResponsiveAppBar />
      <div className="framecontrataciones">
        <div className="text-wrappercontrataciones">Mis Contrataciones</div>
        <div className="tagcontrataciones">
          {contrataciones.map((contratacion) => (
            <TarjetaContratacion
              key={contratacion._id} 
              id_contratacion = {contratacion._id}
              nombre_estudiante={contratacion.nombre_estudiante}
              telefono={contratacion.telefono}
              email={contratacion.email}
              horarios={contratacion.horarios}
              motivos={contratacion.motivos}
              estado={contratacion.estado}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
*/

import * as React from 'react';
import { useState, useEffect } from 'react';
import TarjetaContratacion from '../TarjetaContratacion';
import ResponsiveAppBar from '../NavBarMarketplace';
import { mostrarContrataciones } from '../controller/mostrarContratacionesController';

export default function MisContratacionesComponent() {
  const [contrataciones, setContrataciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContrataciones = async () => {
      try {
        const response = await mostrarContrataciones();
        setContrataciones(response.data);
      } catch (error) {
        console.error("Error al obtener contrataciones:", error.message);
        setContrataciones([]);
      } finally {
        setLoading(false); // Indica que la carga ha finalizado, ya sea con éxito o error.
      }
    };

    // Llama a la función al montar el componente
    fetchContrataciones();

    // Establece un intervalo para llamar a la función cada 10 segundos
    const intervalId = setInterval(fetchContrataciones, 10000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="divgeneralcontrataciones">
      <ResponsiveAppBar />
      <div className="framecontrataciones">
        <div className="text-wrappercontrataciones">Mis Contrataciones</div>
        {loading ? (
          <p className="cargandoo">Cargando...</p>
        ) : (
          <div className="tagcontrataciones">
            {contrataciones.length === 0 ? (
              <p className="no_hay">No tienes contrataciones 📆</p>
            ) : (
              contrataciones.map((contratacion) => (
                <TarjetaContratacion
                  key={contratacion._id} 
                  id_contratacion = {contratacion._id}
                  nombre_estudiante={contratacion.nombre_estudiante}
                  telefono={contratacion.telefono}
                  email={contratacion.email}
                  horarios={contratacion.horarios}
                  motivos={contratacion.motivos}
                  estado={contratacion.estado}
                  />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
