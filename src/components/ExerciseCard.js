import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction='row'>
            <Button sx={{ ml: '20px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '18px', textTransform: "uppercase" }}> 
                {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: '20px', color: '#fff', background: '#fcc757', fontSize: '14px', borderRadius: '18px', textTransform: 'uppercase' }}> 
                {exercise.target}
                </Button>
            </Stack>
            <Typography ml='20px' color="#000" fontWeight="bold" mt="10px" pb="10px" textTransform="capitalize" fontSize="20px">
                {exercise.name}
            </Typography>
        </Link>
    );
};

export default ExerciseCard;