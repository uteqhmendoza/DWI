import { Button, TextField,Box,Container } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../contexts/auth";

export default function Login() {
    const { iniciarSesion } = useAuth()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        iniciarSesion({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    return (
        <Container component="main" maxWidth="xs">
            <h2>Iniciar Sesión</h2>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField 
            id="email" 
            name="email"
            label="Usuario"
             variant="outlined" 
             fullWidth
             required
             value={'humberto.mendoza2@uteq.edu.mx'}
             />
            <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
                required
                value={'P4ssw0rd3'}
            />
            <Button type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >Login</Button>
        </Box>
        </Container>
    )
}