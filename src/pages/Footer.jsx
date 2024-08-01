import { Grid, Typography, } from '@mui/material'
import React from 'react'
import { SocialIcon } from 'react-social-icons'


export default function Footer(){
    return(
        <>
        <Grid container justifyContent='space-between'>
            
        
        <div>
            <ul>
                <li>
                    <Typography gutterBottom variant='body2' sx={{marginLeft:5, marginTop:2}}>
                        Teléfono: +502 2294-5300
                    </Typography>
                </li>
                <li>
                    <Typography gutterBottom variant='body2' sx={{marginLeft:5, marginTop:2}}>
                        WhatsApp Citas: +502 5700-7200
                    </Typography>
                </li>
                <li>
                    <Typography gutterBottom variant='body2' sx={{marginLeft:5, marginTop:2}}>
                        Emergencias: +502 5306-4992
                    </Typography>
                </li>
                <li>
                    <Typography gutterBottom variant='body2' sx={{marginLeft:5, marginTop:2}}>
                        Correo Electrónico: agenda.louvega@gmail.com
                    </Typography>
                </li>
            </ul>
        </div>
        <div>
                <Typography gutterBottom variant='body1' sx={{marginTop:2, marginLeft:5}}>
                    Dirección:
                    Boulevard Vista Hermosa 25-19, zona 15, Edificio Multimédica, Oficina 409 y 411.
                </Typography>
        </div>
        
        </Grid>
        <Icons />
        </>
    )
}
function Icons(){
    return(
        <>
        <SocialIcon network='facebook' url="https://www.facebook.com/advitam.gt/" style={{ height:30, width:30, marginTop:20, marginLeft:40}} />
        <SocialIcon network='instagram' url="https://www.instagram.com/advitam.gt?igsh=MjgzbDZyM3BtMmR3" style={{ height:30, width:30, marginTop:20, marginLeft:60}}/>
        <SocialIcon network='whatsapp' url="https://wa.link/dpruaj" style={{ height:30, width:30, marginTop:20, marginLeft:60}}></SocialIcon>
        </>
    )
}