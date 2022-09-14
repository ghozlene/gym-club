import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../../components/exercises/Exercises';
import SearchExercises from '../../components/searchExercises/SearchExercises';
import HeroBanner from '../../components/heroBanner/HeroBanner';
const Home = () => {
	const [bodyPart, setBodyPart] = useState('all');
	const [exercises, setExercises] = useState([]);
	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
		</Box>
	);
};

export default Home;
