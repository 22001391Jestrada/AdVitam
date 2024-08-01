import { Outlet, Link, useLocation  } from 'react-router-dom'
import React from 'react'
import { Box, Grid, Button } from '@mui/material';
import logo from '../img/logo.jpg'


const Layout = () => {
    const location = useLocation();

    const getButtonStyle = (path) => {
        return {
            color: location.pathname === path ? 'skyblue' : 'black',
        };
    };

    return (
        <>
            <Box sx={{ padding: 2 }}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <img src={logo} alt="Inicio" style={{ width: '300px', height: 'auto' }} />
                    </Grid>
                    <Grid item>
                        <Grid container spacing={5} justifyContent="flex-end">
                            <Grid item>
                                <Link to="/">
                                    <Button sx={getButtonStyle('/')}>Inicio</Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/Nosotros">
                                    <Button sx={getButtonStyle('/Nosotros')}>Nosotros</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Outlet />
            </Box>
        </>
    );
}
export default Layout;