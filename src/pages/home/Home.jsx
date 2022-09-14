import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../../components/exercises/Exercises';
import SearchExercises from '../../components/searchExercises/SearchExercises';
import HeroBanner from '../../components/heroBanner/HeroBanner';
const Home = () => {
	return (
		<Box>
			<HeroBanner />
			<SearchExercises />
			<Exercises />
		</Box>
	);
};

export default Home;
