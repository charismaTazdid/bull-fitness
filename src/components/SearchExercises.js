import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ selectedBodyPart, setSelectedBodyPart, setExercises, AllExercises }) => {
    const [search, setSearch] = useState('');

    const bodyPartsList = ['all', 'back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']

    const handleSearch = async () => {
        if (search) {
            const searchedExercises = AllExercises.filter((exercises) =>
                exercises.name.toLowerCase().includes(search) ||
                exercises.target.toLowerCase().includes(search) ||
                exercises.bodyPart.toLowerCase().includes(search) ||
                exercises.equipment.toLowerCase().includes(search));

            setSearch('');
            setExercises(searchedExercises);
        }
    };

    return (
        <Stack alignItems='center' mt="35px" justifyContent='center' p='20px'>

            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb="50px" textAlign='center'>
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box position='relative' mb='72px' >

                <TextField height="76px" value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    placeholder="Search Exercises"
                    type="text"
                    sx={{
                        input: { fontWeight: "700", border: 'none', borderRadius: '4px' },
                        width: { lg: '800px', xs: '300px' },
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                    }}
                />

                <Button onClick={handleSearch} className='search-btn'
                    sx={{
                        bgcolor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '180px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}>
                    Search
                </Button>

            </Box>
            <Box sx={{ position: 'relative', width: "100%", p: '20px' }}>
                <HorizontalScrollbar data={bodyPartsList}
                    selectedBodyPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart} isBodyParts />
            </Box>

        </Stack>
    );
};

export default SearchExercises;