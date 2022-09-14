import React, { useEffect, useState } from 'react';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';
const SearchExercises = () => {
	const [search, setSearch] = useState('');

	const handleSearch = async () => {
		if (search) {
			//const exercisesData= await fetchData();
		}
	};
	return (
		<Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
			<Typography
				fontWeight={700}
				mb='50px'
				textAlign='center'
				sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
				Awewsome Exercises You Should know
				<br />
			</Typography>
			<Box position='relative' mb='72px'>
				<TextField
					sx={{
						input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
						width: { lg: '810px', xs: '350px' },
						backgroundColor: '#fff',
						borderRadius: '50px',
					}}
					value={search}
					height='76px'
					onChange={(e) => {
						setSearch(e.target.value.toLocaleLowerCase());
					}}
					placeholder='Search Exercise'
					type='text'
					onClick={handleSearch}
				/>
				<Button
					className='search-btn'
					sx={{
						bgcolor: '#ff2625',
						color: '#fff',
						textTransform: 'none',
						width: { lg: '170px', xs: '80px' },
						fontSize: { lg: '22px', xs: '40px' },
						height: '56px',
						position: 'absolute',
						right: '0',
					}}>
					Search
				</Button>
			</Box>
		</Stack>
	);
};

export default SearchExercises;
