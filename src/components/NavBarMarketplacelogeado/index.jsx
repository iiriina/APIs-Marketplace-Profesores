import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SwipeableTemporaryDrawerLogeado from "../SwipeableLogeado";

const pages = [
  { label: "Servicios", href: "/servicios" },
  { label: "Comentarios", href: "/comentarios" },
  { label: "Contrataciones", href: "/miscontrataciones" },
  { label: "Buscar Servicios", href: "/buscar_servicios/logged" },

];

function ResponsiveAppBarlogeado() {
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);

  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: "#FFFFFF" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "black" },
            }}
          >
            <SwipeableTemporaryDrawerLogeado
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", color: "inherit" },
                padding: "30px",
              }}
            />
          </Box>
          <img
            src="\src\components\NavBarMarketplacelogeado\Picture1.png"
            style={{ width: "150px" }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "quicksand",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
              width: "fit-content", 
              textAlign: "center", 

            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                href={page.href}
                sx={{
                  my: 1,
                  color: "black",
                  display: "block",
                  paddingLeft: "90px",
                  fontSize: "18px",
                  fontFamily: "quicksand",
                  textAlign: "left",
                }}
              >
                {page.label}
              </Button>
            ))}
            <Button
              key="Cerrar Sesión"
              onClick={() => {
                window.location.href = 'http://localhost:5173/homeapis';
              }}
              sx={{
                my: 1,
                color: "black",
                display: "block",
                padding: "35px",
                ml: "auto",
                fontSize: "18px",
                fontFamily: "quicksand",
              }}
            >
              Cerrar Sesión
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBarlogeado;