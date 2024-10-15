import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Import Link for routing
import Box from "@mui/material/Box"; // Import Box for Flexbox layout
import colors from "../Colors";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: colors.primary }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            
          }}
        >
          <Button sx={{color:colors.textPrimary}}  component={Link} to="/">
            Home
          </Button>
          <Button sx={{color:colors.textPrimary}} component={Link} to="/rooms">
            Rooms
          </Button>
          <Button sx={{color:colors.textPrimary}} component={Link} to="/menu">
            Menu
          </Button>
          <Button sx={{color:colors.textPrimary}} component={Link} to="/contact">
            Contact Us
          </Button>
          <Button sx={{color:colors.textPrimary}} component={Link} to="/about">
            About Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
