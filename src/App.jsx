import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
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

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="homeapis" element={<HomeApisPage />} />
            <Route path="ver_servicios_profesor" element={<ServicioProveedoresPage />} />
            <Route path="ver_comentarios_profesor" element={<ComentariosProveedoresPage />} />
            <Route path="buscar_servicios" element={<BuscarServiciosPage />} />
            <Route path="perfil_servicio" element={<PerfilServicioPage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="mis_contrataciones" element={<MisContratacionesPage />} />
            <Route path="cambiar_password" element={<ResetPwdPage />} />
            <Route path="completar_datos" element={<CompletarDatosPage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
