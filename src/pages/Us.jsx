import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
import Footer from "./Footer";
import fotoDoc from '../img/material/Opcion1.jpg';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';

export default function Us(){
    return (
        <>
            <Layout />
            <Informacion />
            <Footer />
        </>
    );
}

function Informacion(){
    const titleStyle = {
        textAlign: 'left',
        fontSize: '2rem',
        '@media (min-width: 600px)': {
            fontSize: '3rem'
        },
        '@media (min-width: 960px)': {
            fontSize: '3.8rem'
        }
    };

    const photoStyle = {
        height: 'auto',
        width: '300px',
            
    };

    const cardContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin:'25px',
        '@media (min-width: 600px)': {
            flexDirection: 'row',
            margin:'25px'
        },
        '@media (min-width:960px)':{
            flexDirection: 'row',
            margin:'25px'   
        }
    };

    const textStyle = {
        flex: 1,
        paddingRight: '20px',
    };

    return (
        <>
        <ContactUs />
            <Card>
                <Box sx={cardContentStyle}>
                    <CardContent sx={textStyle}>
                        <Typography variant="h1" sx={titleStyle}>
                            Dr. Jose Eduardo Lou Vega
                        </Typography>
                        <br />
                        <Typography variant="body2" align='justify'>
                            Obtuvo su título de Médico y Cirujano en la prestigiosa Universidad de San Carlos de Guatemala.
                            Continuó su formación especializándose en Ginecología y Obstetricia en la misma institución, destacándose por su compromiso y excelencia académica.
                        </Typography>
                    </CardContent>
                    <CardMedia component='img' image={fotoDoc} sx={photoStyle} />
                </Box>
            </Card>
        </>
    );
}

function ContactUs(){
    const buttonStyle = {
        backgroundColor:'black',
        color:'white',
        height:'70px',
        width:'300px',
        marginLeft:'20px',
        marginRight:'20px',
        '&:hover':{
            backgroundColor:'#0B1957'
        }
        
    }
    const bodyStyle = {
        margin:'10px',
        fontSize:'0.8rem',
        color:'black',
        '@media(min-width:600px)':{
            fontSize:'1rem'
        },
        '@media (min-width:960px)':{
            fontSize:'1.5rem'
        }
    }
    const cardStyle = {
        backgroundColor:'#6EC2E4',
        width:'100%',
        margin:'0px',
        borderRadius: '10px',
        textShadow:'1px 1px grey',
        
    };
    const navigate = useNavigate();
    const handleRedirectContact = () => {
        navigate('/Contactanos');
    };
    return (
        <Box sx={{ display: 'flex', padding:1 }}>
          <Card sx={cardStyle}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <Typography variant="h5" component="div" sx={bodyStyle}>
                Contactanos
              </Typography>
              <Button variant="contained" sx={buttonStyle} onClick={handleRedirectContact}>
                Agenda tu cita
              </Button>
            </CardContent>
          </Card>
        </Box>
      );
    };
    