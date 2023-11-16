import React, { useState } from "react";
import TarjetaServicio from "../TarjetaServicio";
import BotonAgregarServicio from "../BotonAgregarServicio";

export const ServicioProveedoresComponent = () => {
    const [servicio, setServicio] = useState([
        {
            clase: "Ingles",
            tipo_clase: "Grupal",
            duracion: "Mensual",
            precio: "5000",
            biografia:
                "Estudiante de traductorado público, apasionada por los idiomas desde pequeña.Me encuentro dando clases de inglés hace 2 años.No dudes en contactarme!",
        },
        {
            clase: "Física",
            tipo_clase: "Grupal",
            duracion: "Semanal",
            precio: "7000",
            biografia:
                "Recibida de la UBA con más de 10 años de experiencia dando clases particulares.",
        },
        {
            clase: "Matemática",
            tipo_clase: "De a Dos",
            duracion: "2 Semanas",
            precio: "2500",
            biografia:
                "Soy una excelente docente, con gran conocimiento de las matemáticas.",
        },
        {
            clase: "Programación",
            tipo_clase: "Presencial",
            duracion: "6 Clases",
            precio: "4000",
            biografia:
                "Siempre tuve pasión por la programación, tengo más de 12 años de experiencia trabajando con clientes, por lo que te voy a poder ayudar con tus necesidades",
        },
        {
            clase: "Guitarra",
            tipo_clase: "Remoto",
            duracion: "Mensual",
            precio: "7000",
            biografia:
                "Estudiante de la UADE, con amplia proyección, tengo más de 5 años de experiencia como docente, y me encanta enseñar. No dudes en contactarme!",
        },
    ]);

    
    return (
        <div className="frameservicios">
        <div className="text-wrapperservicios">
            <div>Mis Servicios</div>             
                <BotonAgregarServicio />
            </div>
            {servicio.map((servicio) => {
                return (
                    <TarjetaServicio
                        clase={servicio.clase}
                        tipo_clase={servicio.tipo_clase}
                        duracion={servicio.duracion}
                        precio={servicio.precio}
                        biografia={servicio.biografia}
                    />
                );
            })}
        </div>
    );
};

export default ServicioProveedoresComponent;