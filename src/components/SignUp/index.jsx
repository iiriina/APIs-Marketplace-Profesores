import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { registrarUsuario } from '../controller/registrarUsuarioController';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = React.useState({
    nombre: '',
    telefono: '',
    email: '',
    contrasenia: '',
    titulo: '',
    experiencia: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerUser = async () => {
    try {
      const response = await registrarUsuario(userData);

      if (response.rdo === 0) {
        window.alert('Usuario registrado correctamente, inicie sesión.');
        dispatch(loginSuccess());
        navigate('/login');
      } else {
        window.alert('Error al registrar usuario:', response.mensaje);
      }
    } catch (error) {
      window.alert('Error inesperado al registrar usuario.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación básica del formulario
    const requiredFields = ['nombre', 'telefono', 'email', 'contrasenia', 'titulo', 'experiencia'];
    const isValid = requiredFields.every((field) => userData[field]);

    if (!isValid) {
      console.error('Por favor, complete todos los campos obligatorios.');
      return;
    }

    // Llama a la función para registrar al usuario
    registerUser();
  };

  return (
    <div className="container_general_loginn">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className="si">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrarte
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="nombre"
                    name="nombre"
                    required
                    fullWidth
                    id="nombre"
                    label="Nombre"
                    autoFocus
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="telefono"
                    label="Telefono"
                    name="telefono"
                    autoComplete="telefono"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="contrasenia"
                    label="Contraseña"
                    type="contrasenia"
                    id="contrasenia"
                    autoComplete="contrasenia"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="titulo"
                    label="Título"
                    type="titulo"
                    id="titulo"
                    autoComplete="titulo"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="experiencia"
                    label="Experiencia"
                    name="experiencia"
                    autoComplete="experiencia"
                    autoFocus
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Crear Cuenta
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="login" variant="body2">
                    Ya tenés una cuenta? Inicia Sesión
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
