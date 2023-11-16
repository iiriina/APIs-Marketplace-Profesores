import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import Home from './Pages/Home';
import ServiciosProveedores from './Pages/ServiciosProveedor';
import ComentariosProveedores from './Pages/ComentariosDeProveedor';
import BuscarServicios from './Pages/BuscarServicios';
import PerfilServicio from './Pages/PerfilServicio';
import Login from './Pages/Login';
import Register from './Pages/Register';
import VerContrataciones from './Pages/VerContrataciones';
import CambiarPassword from './Pages/CambiarPassword';
import BuscarServiciosLogueado from './Pages/BuscarServiciosLogueado';
import PerfilServicioLogueado from './Pages/PerfilServicioLogueado';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
    console.log('Iniciar Sesión llamado');
    console.log('esta logeado?');
    console.log(isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="servicios" element={<ServiciosProveedores />} />
          <Route path="comentarios" element={<ComentariosProveedores />} />
          <Route path="buscar_servicios" element={<BuscarServicios isLoggedIn={isLoggedIn} />} />
          <Route path="buscar_servicios/logged" element={<BuscarServiciosLogueado isLoggedIn={isLoggedIn} />} />
          <Route path="perfil_servicio" element={<PerfilServicio />} />
          <Route path="perfil_servicio/logged" element={<PerfilServicioLogueado />} />
          <Route path="login" element={<Login onLogin={handleLogin}/>} />
          <Route path="signup" element={<Register />} />
          <Route path="miscontrataciones" element={<VerContrataciones />} />
          <Route path="resetpwd" element={<CambiarPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;