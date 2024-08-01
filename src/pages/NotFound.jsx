import { Typography } from "@mui/material"
import Layout from "./Layout";

export default function NotFound(){
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
        color:'black',
        align:'center',
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
        color:'black',
        '@media (min-width: 960px)': {
            fontSize: '4rem'
        }
        
    };

    return(
        <>
        <Layout />
        
        <Typography variant="h1" sx={titleStyle}>Error 404</Typography>
        <Typography variant="body1" sx={bodyStyle}>No se ha encontrado esta página</Typography>
        </>
    )
}