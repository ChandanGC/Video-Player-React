import React from "react";
import Logo from "../assets/logo.png";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { selectToggler, toggleDrawer } from "../functionalities/toggleSlice";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const handleClick = (isShown, dispatch) => {
  dispatch(toggleDrawer(!isShown));
};

const NavBar = () => {
  const isShown = useSelector(selectToggler);
  const dispatch = useDispatch();
  return (
    <AppBar sx={{ position: "relative", bgcolor: "#4b4b4b" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => handleClick(isShown, dispatch)}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ p: "0.5rem" }}>
          <img
            src={Logo}
            style={{ height: "2.5rem", width: "2.5rem" }}
            alt="logo"
          />
        </Box>
        <Toolbar sx={{ px: "1rem", width: "100%" }}>
          <Link
            to="/"
            style={{
              color: "#ffffff",
              padding: "0.5rem",
              textDecoration: "none",
              fontSize: "1.25rem",
              fontFamily: " Noto Sans JP, sans-serif",
            }}
          >
            Home
          </Link>
          <Link
            to="/history"
            style={{
              color: "#ffffff",
              padding: "0.5rem",
              textDecoration: "none",
              fontSize: "1.25rem",
              fontFamily: " Noto Sans JP, sans-serif",
            }}
          >
            History
          </Link>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
