import { Stack } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <Stack
            direction='row'
            justifyContent='space-around'
            px= '20px'
            sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
        >
            <Link to={'/'} >
                <img src={logo} alt="logo" style={{ width: '86px', height: '60px', margin: '0px 20px' }} />
            </Link>
            <Stack
                direction='row'
                gap='40px'
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link to='/' style={{ textDecoration: 'none', color: "#fff", borderBottom: '3px solid #FF2625' }}> Home </Link>
                <a href="#exercises" style={{ textDecoration: 'none', color: '#fff' }}>
                    Exersises
                </a>
            </Stack>

        </Stack>
    );
};

export default Navbar; 