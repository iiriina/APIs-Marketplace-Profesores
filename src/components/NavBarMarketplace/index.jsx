import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SwipeableTemporaryDrawer from "../Swipeable/index.jsx";



const pages = ["About Us", "Buscar Profesional"];

const pagesLogin = ["About Us", "Buscar Profesional", "Iniciar Sesión como Profesor"];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SwipeableTemporaryDrawer
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none", color: "inherit"} }}
          />
          <img
            src="src/components/NavBarMarketplace/Picture1.png"
            style={{ width: "20%" }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pagesLogin.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

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
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  color: "white",
                  display: "block",
                  paddingLeft: "90px",
                  fontSize: "18px",
                  fontFamily: "quicksand",
                  textAlign: "left",
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              key="Iniciar Sesión como Profesor"
              onClick={handleCloseNavMenu}
              sx={{
                my: 1,
                color: "white",
                display: "blok",
                padding: "35px",
                ml: "auto",
                fontSize: "18px",
                fontFamily: "quicksand",
              }}
            >
              Iniciar Sesión <br /> como Profesor
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default ResponsiveAppBar;
