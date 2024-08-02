import React, { useState } from 'react';
import { Typography, Card, CardMedia, TextField, Button, InputLabel } from "@mui/material";
import Footer from "./Footer";
import Layout from './Layout';
import graphic from '../img/sapiens.png';
import { db, addDoc, collection } from './firebaseconfig.js';

//----------------------------------------------------------------------------------------------
export async function addApointment(nombre, telefono, mensaje) {
  try {
    const docRef = await addDoc(collection(db, 'Citas'), {
      nombre: nombre,
      telefono: telefono,
      mensaje: mensaje,
    });
    console.log('Documento agregado con ID: ', docRef.id);
    //Seria Bueno enviarles un correo con la información de contacto
  } catch (e) {
    console.error('Error agregando documento: ', e);
  }
}

export default function Contact() {
  return (
    <>
      <Layout />
      <Form />
      <Footer />
    </>
  );
}

function Form() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleTelefonoChange = (e) => setTelefono(e.target.value);
  const handleMensajeChange = (e) => setMensaje(e.target.value);

  const handleSubmit = () => {
    addApointment(nombre, telefono, mensaje);
    setNombre('');
    setTelefono('');
    setMensaje('');
    setMensajeEnviado(true);
  };

  const titleStyle = {
    fontSize: '2rem',
    '@media (min-width: 600px)': {
      fontSize: '3rem'
    },
    '@media (min-width: 960px)': {
      fontSize: '4rem'
    }
  };
  const buttonStyle = {
    backgroundColor: '#48BDE9',
    color: 'white',
    height: '70px',
    width: '200px',
    margin: '20px',
    '&:hover': {
      backgroundColor: '#6EC2E4'
    },
  };

  const imgStyle = {
    height: '300px',
    width: 'auto',
    float: 'right',
    margin: '20px'
  };

  return (
    <Card>
      <CardMedia component='img' image={graphic} sx={imgStyle} />
      <Typography variant="h1" component='div' sx={titleStyle}>Contactanos</Typography>
      <InputLabel id="nombre-label">Nombre completo</InputLabel>
      <TextField variant='outlined' id="name" label="Ingrese su nombre" value={nombre} onChange={handleNombreChange} />
      <br />
      <InputLabel id="telefono-label">Número de teléfono</InputLabel>
      <TextField variant='outlined' id='cellphone' label='Ingrese su número' value={telefono} onChange={handleTelefonoChange} />
      <br />
      <InputLabel id="mensaje-label">Mensaje</InputLabel>
      <TextField variant="outlined" id='message' label='¿Tiene alguna duda o comentario que quiera compartir con nosotros?' value={mensaje} onChange={handleMensajeChange} />
      <br />
      <Button sx={buttonStyle} onClick={handleSubmit}>Enviar</Button>
      {mensajeEnviado && (
        <Typography variant="body1" color="textSecondary" sx={{ marginTop: '20px' }}>
          Nosotros nos comunicaremos con usted para agendar la cita.
        </Typography>
      )}
    </Card>
  );
}