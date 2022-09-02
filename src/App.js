import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {

    return (
        <Box width={"400px"} sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='/exercise/:id' element={<ExerciseDetails />}> </Route>
            </Routes>
            <Footer />
        </Box>
    );
};

export default App;