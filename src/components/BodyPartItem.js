import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, selectedBodyPart, setSelectedBodyPart }) => {
    return (
        <Stack onClick={() => { setSelectedBodyPart(item); window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' }) }}
            type="button" alignItems="center" justifyContent="center" className='bodyPart-card'
            sx={{
                borderTop: selectedBodyPart === item ? "7px solid #ff2625" : '',
                backgroundColor: "#fff", borderBottomLeftRadius: '20px', width: '270px', height: '270px', cursor: 'pointer', gap: '45px'
            }}>

            <img src={Icon} alt="dumbell" style={{ width: '150px', height: '150px' }} />
            <Typography fontSize='20px' fontWeight='bold' textTransform='capitalize' color='#FF2625'> {item} </Typography>
        </Stack >
    );
};

export default BodyPart;