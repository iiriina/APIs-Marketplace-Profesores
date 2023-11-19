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
import { Provider } from 'react-redux';
import store from './redux/store'; // Asegúrate de tener la ruta correcta

function App() {
  return (
  <Provider store={store}>
  <>
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="servicios" element={<ServiciosProveedores />} />
        <Route path="comentarios" element={<ComentariosProveedores />} />
        <Route path="buscar_servicios" element={<BuscarServicios />} />
        <Route path="perfil_servicio" element={<PerfilServicio />} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Register />} />
        <Route path="miscontrataciones" element={<VerContrataciones />} />
        <Route path="resetpwd" element={<CambiarPassword />} />
      </Routes>
    </BrowserRouter>
    </>
  </Provider>

  );
}

export default App;