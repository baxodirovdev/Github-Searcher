import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { GitHub } from "@material-ui/icons";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="navbar__icon" aria-label="menu">
            <GitHub fontSize="large" />
          </IconButton>
          <Typography className="navbar__logo">GitHub</Typography>
          <div className="navbar__links">
            <NavLink to="/" className="navbar__link">
              Users
            </NavLink>
            <NavLink to="/searchrepos" className="navbar__link">
              Repesitories
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
