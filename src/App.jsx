import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import HomeApisPage from './Pages/HomeApisPage';
import ServicioProveedoresPage from './Pages/ServicioProveedoresPage';
import ComentariosProveedoresPage from './Pages/ComentariosProveedoresPage'
import BuscarServiciosPage from './Pages/BuscarServiciosPage'
import PerfilServicioPage from './Pages/PerfilServicioPage'
import LogInPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import MisContratacionesPage from './Pages/MisContratacionesPage'
import ResetPwdPage from './Pages/ResetPwdPage'
import CompletarDatosPage from './Pages/CompletarDatosPage'
import BuscarServiciosLogueadoPage from './Pages/BuscarServiciosLogueadoPage';
import PerfilServicioLogueado from './Pages/PerfilServicioLogueadoComponent';

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
          <Route path="homeapis" element={<HomeApisPage />} />
          <Route path="servicios" element={<ServicioProveedoresPage />} />
          <Route path="comentarios" element={<ComentariosProveedoresPage />} />
          <Route path="buscar_servicios" element={<BuscarServiciosPage isLoggedIn={isLoggedIn} />} />
          <Route path="buscar_servicios/logged" element={<BuscarServiciosLogueadoPage isLoggedIn={isLoggedIn} />} />
          <Route path="perfil_servicio" element={<PerfilServicioPage />} />
          <Route path="perfil_servicio/logged" element={<PerfilServicioLogueado />} />
          <Route path="login" element={<LogInPage onLogin={handleLogin}/>} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="miscontrataciones" element={<MisContratacionesPage />} />
          <Route path="resetpwd" element={<ResetPwdPage />} />
          <Route path="completardatos" element={<CompletarDatosPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;