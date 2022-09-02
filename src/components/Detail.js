import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import bodyPartImage from '../assets/icons/body-part.png';
import targetImage from '../assets/icons/target.png';
import equipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail: { name, bodyPart, gifUrl, target, equipment } }) => {

    const extraDetails = [
        {
            icon: bodyPartImage,
            name: bodyPart,
        },
        {
            icon: targetImage,
            name: target,
        },
        {
            icon: equipmentImage,
            name: equipment,
        },
    ];

    return (
        <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant='h3' textTransform='capitalize'> {name} </Typography>
                <Typography variant='h4'> Exercise not only changes your body, it changes your mind, your attitude and your mood </Typography>
                <Typography variant='h6'> This exercise keep you strong. {name} {''}
                    is one of the best Exercise to target your {target}. It will help you improve you mood and garin energy.
                </Typography>
                {
                    extraDetails.map(item => (
                        <Stack key={item.name} direction="row" gap="24px" alignItems='center'>
                            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
                                <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                            </Button>
                            <Typography variant='h5' textTransform='capitalize'> {item.name} </Typography>
                        </Stack>
                    ))
                }

            </Stack>

        </Stack>
    );
};

export default Detail;