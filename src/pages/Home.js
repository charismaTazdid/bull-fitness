import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [AllExercises, SetAllsetExercises] = useState([]);

    const [selectedBodyPart, setSelectedBodyPart] = useState('all');

    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} selectedBodyPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart} AllExercises={AllExercises} />

            <Exercises exercises={exercises} setExercises={setExercises} selectedBodyPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart} SetAllsetExercises={SetAllsetExercises} AllExercises={AllExercises} />
        </Box>
    );
};

export default Home;