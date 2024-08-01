import { Typography, Card, CardMedia, TextField, Select, MenuItem, Button, InputLabel } from "@mui/material";
import Footer from "./Footer";
import Layout from './Layout'
import graphic from '../img/sapiens.png'

export default function Contact(){
    return(
        <>
        <Layout />
        <Form />
        <Footer />
        </>
    )
}

function Form(){
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
        backgroundColor:'#48BDE9',
        color:'white',
        height:'70px',
        width: '200px',
       
        margin:'20px',
        '&:hover':{
            backgroundColor:'#6EC2E4'
        },
        
    }

    const imgStyle ={
        height: '300px',
        width: 'auto',
        float: 'right',
        margin: '20px' 
    }
    return(
        <Card>

        <CardMedia component='img' image={graphic} sx={imgStyle} />

        <Typography variant="h1" component='div' sx={titleStyle}>Contactanos</Typography>
        <InputLabel id="demo-simple-select-label">Nombre completo</InputLabel>
        <TextField variant='outlined' id="name" label="Ingrese su nombre" />
        <br />
        <InputLabel id="demo-simple-select-label">Número de teléfono</InputLabel>
        <TextField variant='outlined' id='cellphone' label='Ingrese su número' />
        <br />
        <InputLabel id="demo-simple-select-label">¿Es primera vez que nos visita?</InputLabel>
        <Select id='isPatient' labelId='esPaciente'label='Es primera vez que nos visita?' sx={{width:225}}>
        
            <MenuItem>Es mi primera vez como paciente en este consultorio.</MenuItem>
            <MenuItem>No es mi primera vez aquí como paciente</MenuItem>
        </Select>
        <br />
        <InputLabel id="demo-simple-select-label">Mensaje</InputLabel>
        <TextField variant="outlined" id='message' label='¿Tiene alguna duda o comentario que quiera compartir con nosotros?' />
        <br />
        <Button sx={buttonStyle}>Enviar</Button>

        
        </Card>
    )
}