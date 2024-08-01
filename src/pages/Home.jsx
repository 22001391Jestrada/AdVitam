import { 
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography, 
    Button, 
    Table, 
    TableHead,
    TableBody, 
    TableContainer,
    TableCell,
    Paper,
    TableRow,
    Slide 
} from "@mui/material";
import Footer from "./Footer"
import Layout from './Layout'
import bgImage from '../img/material/backgroungHeader.jpg'
import { useNavigate } from "react-router-dom";
import React , { useRef } from "react";
import graphic from '../img/sapiens.png'


export default function Home(){
    return(
        <>
        <Layout />
        <Header />
        <Servicios />
        <ScheduleTable />
        <br />
        <Footer />
        </>
    )
}

function Header() {
    const navigate = useNavigate();
    const handleRedirectContact = () => {
        navigate('Contactanos');
    };

    const cardStyle = {
        margin:'10px',
        backgroundImage:'url(src/img/material/backgroungHeader.jpg)',
        borderRadius: '10px',
        paddingTop: '50px',
        paddingLeft:'10px',
        paddingRight:'10px',
        paddingBottom:'50px',
        textAlign: 'center',
        textShadow:'2px 2px black',
        
    };

    const cardContainerStyle = {
        height: '350px',
        width: '100%',
        maxWidth: 'auto',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
        
    };

    const bodyStyle = {
        margin:'10px',
        fontSize:'0.8rem',
        color:'white',
        '@media(min-width:600px)':{
            fontSize:'1rem'
        },
        '@media (min-width:960px)':{
            fontSize:'1.8rem'
        }
    }

    const titleStyle = {
        margin:'15px',
        fontSize: '2rem',
        color:'white',
        '@media (min-width: 960px)': {
            fontSize: '4rem'
        }
        
    };

    const buttonStyle = {
        backgroundColor:'#48BDE9',
        color:'black',
        height:'70px',
        width:'300px',
        margin:'20px',
        '&:hover':{
            backgroundColor:'#6EC2E4'
        }
    }

    return (
        <>
            <div style={cardStyle}>
                
                <Card sx={cardContainerStyle}>
                    
                    <CardContent>
                        <Typography variant='h1' component='div' sx={titleStyle}>
                            Ginecología y Obstetricia en la Ciudad de Guatemala
                        </Typography>
                        <Typography variant='body1' component='div' sx={bodyStyle}>
                            Te brindamos un servicio personalizado y te atendemos según tus necesidades.
                        </Typography>
                        <Button size='large' color='primary' onClick={handleRedirectContact} sx={buttonStyle} >Contactanos</Button>
                    </CardContent>

                </Card>
            </div>
        </>
    );
}
function ScheduleData(days, hours) {
    return { days, hours };
}

const rows = [
    ScheduleData('Lunes a jueves', '8:00 AM - 5:00 PM'),
    ScheduleData('Viernes', '8:00 AM - 1:00 PM'),
    ScheduleData('Sábado', '7:00 AM - 11:00 AM'),
    ScheduleData('Domingo', 'Cerrado'),
];

function ScheduleTable() {
    const tableStyle = {
        margin: '1px',
        padding: '1px',
        width: '100%',
        backgroundColor: '#D3F3FF',
    };

    const headerStyle = {
        fontWeight: 'bold'
    };

    return (
        <>
            <TableContainer component={Paper} sx={tableStyle}>
                <Table aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={headerStyle}>Horario de atención</TableCell>
                            <TableCell align='right' sx={headerStyle}>Hora</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.days}>
                                <TableCell component='th' scope='row'>
                                    {row.days}
                                </TableCell>
                                <TableCell align='right'>{row.hours}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

function Servicios() {
    const photoStyle = {
        height: 'auto',
        width: '100%',
        maxWidth: '400px',
        '@media (max-width:600px)': {
            width: '100%',
            maxWidth: 'none',
        },
    };

    const containerStyle = {
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row-reverse' },
        alignItems: 'flex-start',
    };

    const contentStyle = {
        flex: 1,
        marginRight: { xs: 0, sm: '20px' },
        marginBottom: { xs: '20px', sm: 0 },
    };

    return (
        <Box sx={containerStyle}>
            <CardMedia component='img' image={graphic} sx={photoStyle} />
            <Box sx={contentStyle}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Clínica Ginecológica y Obstétrica en Boulevard Vista Hermosa
                </Typography>
                <Typography variant="body1" paragraph>
                    En nuestra clínica, ofrecemos una amplia gama de servicios ginecológicos y obstétricos para asegurar la salud y bienestar de nuestras pacientes. Contamos con un equipo de expertos especializados en las siguientes áreas:
                </Typography>
                <ul>
                    <li><Typography variant="body1">Ginecología y Obstetricia: Atención integral para la salud femenina.</Typography></li>
                    <li><Typography variant="body1">Urología Ginecológica: Tratamiento de problemas urológicos en mujeres.</Typography></li>
                    <li><Typography variant="body1">Embarazo de Alto Riesgo: Monitoreo y cuidado especializado para embarazos complicados.</Typography></li>
                    <li><Typography variant="body1">Climaterio y Menopausia: Manejo de síntomas y tratamiento durante la transición menopáusica.</Typography></li>
                    <li><Typography variant="body1">Láser Ginecoestético: Procedimientos estéticos y funcionales con tecnología láser.</Typography></li>
                    <li><Typography variant="body1">Cirugía Videolaparoscópica: Cirugía mínimamente invasiva para diversas condiciones ginecológicas.</Typography></li>
                    <li><Typography variant="body1">Diagnóstico Gineco Obstétrico: Evaluaciones y diagnósticos precisos para la salud ginecológica y obstétrica.</Typography></li>
                    <li><Typography variant="body1">Rehabilitación de Piso Pélvico: Terapias para fortalecer y rehabilitar el suelo pélvico.</Typography></li>
                </ul>
         
            </Box>
        </Box>
    );
}