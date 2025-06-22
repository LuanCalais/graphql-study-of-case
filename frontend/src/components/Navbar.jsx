import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">
              <img
                src="./bookql-logo-light.png"
                alt="Logo"
                style={{ width: "80px" }}
              />
            </Button>
          </Typography>

          <Button color="inherit" component={Link} to="/create">
            Criar Livro
          </Button>

          <Button color="inherit" component={Link} to="/authors">
            Autores
          </Button>

          <Button color="inherit" component={Link} to="/books">
            Livros
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
