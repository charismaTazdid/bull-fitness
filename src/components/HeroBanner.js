import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import bannerImg from '../assets/images/banner.jpg';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }}
            position='relative' p="20px">

            <Typography color="#FF2625" fontWeight='600' fontSize='26px'> Fitness Club </Typography>
            <Typography fontWeight='700'
                sx={{ fontSize: { lg: '44px', sx: '40px' } }}
                mb="23px" mt='30px'>
                TODAY IS THE BEST <br />
                DAY TO START!
            </Typography>

            <Typography fontSize='20px' lineHeight='35px' mb={4} >
            GET IN SHAPE WITH OUR PRO TRAINERS. REACH YOUR <br /> BODY GOALS IN NO TIME
            </Typography>

            <Button variant='contained' color='error' sx={{ backgroundColor: '#ff2625', padding: '8px 20px' }}>
                Explore More
            </Button>
            <Typography fontWeight={600} color="#fff"
                sx={{ opacity: 0.3, display: { lg: 'block', xs: 'none' } }}
                fontSize="200px"
                mt={4}
            >
                Exercises
            </Typography>
            <img src={bannerImg} className="hero-banner-img" alt="Banner_Image" />
        </Box>
    );
};

export default HeroBanner;