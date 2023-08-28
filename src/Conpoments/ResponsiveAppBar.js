import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Healthshare from "../Asserts/healthshare.png";
import { NavLink, useNavigate } from "react-router-dom";

const element = [{ Txt: " Home", href: "/" }];

const auths = [
  { Txt: "Sign in", href: "/signin" },
  { Txt: "Sign up", href: "/signup" },
];
const acc = [{ Txt: "My Account", href: "/account" }];

function ResponsiveAppBar() {
  const [navItems1, setnavItems1] = React.useState(auths);
  const [navItems2, setnavItems2] = React.useState(acc);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handlesignin = () => {
    navigate("/signin", { replace: true });
  };
  const handleNavigation = (page) => {
    console.log("page", page);
    navigate("/", { replace: true });
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  console.log("navItems2", navItems2);
  return (
    <AppBar position="static" sx={{ backgroundColor: "#070D59!important" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Healthshare}
            alt="Your Alt Text"
            style={{ width: "150px", height: "auto" }}
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
              {element.map((elements) => (
                <NavLink
                  key={elements.href}
                  to={elements.href}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Proxima Nova, Verdana, Avenir Next",
                  }}
                >
                  {elements.Txt}
                </NavLink>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {element.map((elements) => (
              <NavLink
                key={elements.href}
                to={elements.href}
                onClick={handleCloseNavMenu}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Proxima Nova, Verdana, Avenir Next",
                }}
              >
                {elements.Txt}
              </NavLink>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {localStorage.getItem("token")
              ? navItems2.map((item, i) => (
                  <Button
                    key={item.Txt}
                    // onClick={handlesignin}
                    sx={{ my: 2, color: "white!important", display: "block" }}
                  >
                    <div>
                      <NavLink
                        to={item.href}
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          fontFamily: "Proxima Nova, Verdana, Avenir Next",
                        }}
                      >
                        {item.Txt}
                      </NavLink>
                    </div>
                  </Button>
                ))
              : navItems1.map((item, i) => (
                  <Button
                    key={item.Txt}
                    // onClick={handlesignin}
                    sx={{ my: 2, color: "white!important", display: "block" }}
                  >
                    <div>
                      <NavLink
                        to={item.href}
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          fontFamily: "Proxima Nova, Verdana, Avenir Next",
                        }}
                      >
                        {item.Txt}
                      </NavLink>
                    </div>
                  </Button>
                ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
