import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const ExerciseVideos = ({ exerciseVideos, name }) => {
    console.log(exerciseVideos)
    return (
        <Box sx={{ mt: { lg: '200px', xs: '20px' }, p: '20px' }}>
            <Typography variant='h4' mb='30px'> Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}> {name} </span> Exercise Videos: </Typography>

            <Stack justifyContent="center" flexWrap='wrap' alignItems="center" sx={{ flexDirection: { lg: 'row' }, gap: { lg: '60px', xs: '40px' } }}>

                {
                    exerciseVideos?.slice(0, 6).map((item, index) => (
                        <a className='exercise-video' key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer" >

                            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <Typography variant='h5' color='#fce4e4c4'>
                            {item.video.title}
                            </Typography>
                            <Typography variant='h6' color='#fce4e4c4'>
                           Creator: {item.video.channelName}
                            </Typography>
                        </a>
                    ))
                }

            </Stack>
        </Box>
    );
};

export default ExerciseVideos;