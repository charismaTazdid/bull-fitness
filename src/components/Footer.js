import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-11.png';

const Footer = () => {
    return (
        <Box mt='80px' bgcolor='#ffffffd5' sx={{borderRadius: '20px 20px 0px 0px' }}  >
            <Stack  alignItems="center" px="40px" pt="25px">
                <img src={Logo} alt="LOGO" width="250px" height="80px" />

                <Typography variant='body2' mt='18px'> &copy; Raihan Tazdid</Typography>
                <a href="https://github.com/raihan-tajdid007" target="_blank" rel="noreferrer" style={{marginBottom: '20px'}}>
                    <Button> Visit my Github </Button>
                </a>
            </Stack>
        </Box>
    );
};

export default Footer;