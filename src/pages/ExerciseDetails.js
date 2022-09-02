import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { useParams } from 'react-router-dom';
import { fetchData, youtubeOptions } from '../utils/fetchData'

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const [exerciseVideos, setExerciseVideos] = useState([]);

    const allExerceses = JSON.parse(localStorage.getItem("allExercise"));

    const { id } = useParams();
    useEffect(() => {
        const loadExerceseDetailData = async () => {
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = allExerceses.find((ex) => ex.id === id);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideoData.contents);

            const targetMuscleExercise = allExerceses.filter((ex) => ex.target === exerciseDetailData.target);
            setTargetMuscleExercises(targetMuscleExercise);

            const sameEquepmentExercises = allExerceses.filter((ex) => ex.equipment === exerciseDetailData.equipment);
            setEquipmentExercises(sameEquepmentExercises);

        };

        loadExerceseDetailData();
        window.scrollTo(({ top: 20, behavior: 'smooth' }))
    }, [id]);
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    );
};

export default ExerciseDetails;