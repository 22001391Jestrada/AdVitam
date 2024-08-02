import { Button, Card, CardContent, CardMedia, TextField } from "@mui/material"; 
import logo from '../img/logo.jpg';
import React from "react";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebaseconfig'; // Asegúrate de importar tu configuración de Firebase

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError('');
        } catch (error) {
            setError('Error al iniciar sesión, Revisar Credenciales.');
        }
    };

    return (
        <Card>
            <CardMedia
                component="img"
                alt="Logo"
                image={logo}
                sx={{ width: '350px', height: 'auto', margin: '48px auto' }} //Ajustar tamaño del logo
            />
            <CardContent>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <center>
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    Login
                </Button>
                </center>
                {error && <p>{error}</p>}
            </CardContent>
        </Card>
    );
}
