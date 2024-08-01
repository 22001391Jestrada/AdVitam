import { Button, Card, CardContent, CardMedia, TextField } from "@mui/material" 
import logo from '../img/logo.jpg'
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";


export default function LoginButton(){
    const { loginWithRedirect } = useAuth0();
    return(
        <Button onClick={()=> loginWithRedirect()}>Iniciar sesion</Button>
    );
}