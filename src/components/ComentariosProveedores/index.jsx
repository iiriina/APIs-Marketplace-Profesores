import React from "react";
import ComentarioUsuario from "../ComentarioUsuario";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const ComentariosProveedores = () => {
    return (
    <div className="framepagcomentarios">
        {/* contenido de la pagina */}
        
        <div className="text-wrapperpagcomentarios">Mis Comentarios</div>
        
        {/* hay que hacer que el contenido le llegue por props, asi ponemos el nombre, imagen y eso segun corresponda */}
        <ComentarioUsuario />
        <ComentarioUsuario />
        <ComentarioUsuario />
        <ComentarioUsuario />
    </div>
        

    );
};

export default ComentariosProveedores