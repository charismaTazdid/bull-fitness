import React, { useEffect, useState } from 'react';
import { Box, Pagination, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { exercisesOptions, fetchData } from '../utils/fetchData';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, selectedBodyPart, SetAllsetExercises, AllExercises }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const exercisePerPage = 9;
    const indexOfLastExercise = currentPage * exercisePerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
    const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo(({ top: 1800, behavior: 'smooth' }))
    };

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exerciseData = [];
            if (selectedBodyPart === 'all') {
                exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
                SetAllsetExercises(exerciseData)
                localStorage.setItem("allExercise", JSON.stringify(exerciseData))

            } else {
                exerciseData = AllExercises.filter((exercises) => exercises.bodyPart === selectedBodyPart);
            }
            setExercises(exerciseData)
        };
        fetchExercisesData();

    }, [selectedBodyPart]);

    return (
        <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
            <Typography variant='h4' fontWeight='900' mb='40px' textTransform='capitalize'>
                Showing result for: <span style={{ color: 'red' }}> {selectedBodyPart} </span> <br />
                <span style={{ fontSize: '20px' }}>total result found : {exercises.length}</span>
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center" >
                {
                    currentExercise.map((exercise, index) => (
                        <ExerciseCard key={index} exercise={exercise} />
                    ))
                }
                {!currentExercise.length && <Loader />}
            </Stack>
            {/* pagination stack */}
            <Stack mt='50px' alignItems='center'  >
                {
                    exercises.length > 9 && (
                        <Pagination
                            color='standard'
                            sx={{ bgcolor: 'whitesmoke', px: '36px', py: '8px', borderRadius: '10px', }}
                            shape='rounded' defaultPage={1}
                            count={Math.ceil(exercises.length / exercisePerPage)}
                            page={currentPage}
                            onChange={paginate} size="large"
                        />
                    )
                }
            </Stack>
        </Box>
    );
};

export default Exercises;