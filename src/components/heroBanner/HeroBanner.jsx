import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import Fitness from '../../assets/images/fitness.png';
const HeroBanner = () => {
	return (
		<Box
			sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
			position='relative'
			p='20px'>
			<Typography color='#ff2625' fontWeight='600' fontSize='26px'>
				Fitness Club
			</Typography>
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: '44px', xs: '40px' } }}
				mb='23px'
				mt='30px'>
				Work ,Quick,Smile <br />
				And Repeat
			</Typography>

			<Typography
				fontSize='22px'
				lineHeight='35px'
				mb={4}
				className='typographybox'>
				Check out the most effective exercises
			</Typography>
			<Button
				variant='contained'
				color='error'
				href='#exerises'
				sx={{ backgroundColor: '#ff2625', padding: '10px' }}>
				Explore Exercises
			</Button>

			<Typography
				sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
				color='#ff2625'
				fontWeight={600}
				mb={3}
				fontSize='200px'
				className='typographybox'>
				Exercise
			</Typography>
			<img src={Fitness} alt='banner' className='hero-banner-img' />
		</Box>
	);
};

export default HeroBanner;
