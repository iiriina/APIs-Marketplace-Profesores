import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import LoginPage from './Pages/LoginPageSeminario'
import Register from './Pages/Register'
import HomePage from './Pages/HomePage'
import SearchPage from './Pages/SearchPage'
import MainHomePage from './Pages/MainHomePage'
import ProfessionalProfilePage from './Pages/ProfessionalProfilePage'
import DiaryEntryPage from './Pages/DiaryEntryPage'
import SessionsPage from './Pages/SessionsPage'
import PaymentsPage from './Pages/PaymentsPage'
import DiaryPage from './Pages/DiaryPage'
import HomeApisPage from './Pages/HomeApisPage';
import ServicioProveedoresPage from './Pages/ServicioProveedoresPage';
// Context
import AppointmentState from './context/appointments/appointmentState';
import ProfessionalState from './context/professional/professionalState';
import ComentariosProveedoresPage from './Pages/ComentariosProveedoresPage'
import BuscarServiciosPage from './Pages/BuscarServiciosPage'
import PerfilServicioPage from './Pages/PerfilServicioPage'
import LogInPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import MisContratacionesPage from './Pages/MisContratacionesPage'
import ResetPwdPage from './Pages/ResetPwdPage'

function App() {

  return (
    <ProfessionalState>
      <AppointmentState>
        <BrowserRouter>
          <Routes>
            {/* lo voy a comentar porque es lo de seminario 
                        <Route path="/login" element={<AuthLayout />}>
              <Route index element={<LoginPage />} />
              <Route path="register" element={<Register />} />
            </Route>
            */}

            <Route path="search" element={<SearchPage />}/>
            <Route path="home" element={<HomePage />} />

            {/* homepage para apis */}
            <Route path="homeapis" element={<HomeApisPage />} />
          
            {/* serv proveedores para apis */}
            <Route path="servicios" element={<ServicioProveedoresPage />} />

            {/* comentarios proveedores para apis */}
            <Route path="comentarios" element={<ComentariosProveedoresPage />} />

            {/* busqueda de servicios de los usuarios para apis */}
            <Route path="buscar_servicios" element={<BuscarServiciosPage />} />

            {/* perfil de servicio para apis */}
            <Route path="perfil_servicio" element={<PerfilServicioPage />} />

            {/* log in para apis no tiene css importado*/}
            <Route path="login" element={<LogInPage />} />

            {/* sign up para apis no tiene css importado*/}
            <Route path="signup" element={<SignUpPage />} />

            {/*AÚN NO ESTÁ HECHO mis contrataciones (aca va la tabla mati) para apis */}
            <Route path="miscontrataciones" element={<MisContratacionesPage />} />

            {/*AÚN NO ESTÁ HECHO mis contrataciones (aca va la tabla mati) para apis */}
            <Route path="resetpwd" element={<ResetPwdPage />} />

            <Route path="main" element={<MainHomePage />} />
            <Route path="profile/:id" element={<ProfessionalProfilePage />} />
            <Route path="diaryentry" element={<DiaryEntryPage />} />
            <Route path="sessions" element={<SessionsPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="diarypage" element={<DiaryPage />} />
          </Routes>
        </BrowserRouter>
      </AppointmentState>
    </ProfessionalState>
  )
}

export default App
