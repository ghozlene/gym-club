import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import './NavBar.css';
import Logo from '../../assets/images/Logo.png';
const NavBar = () => {
	return (
		<Stack
			direction='row'
			justifyContent='space-around'
			sx={{
				gap: { sm: '122px', xs: '40px' },
				mt: { sm: '32px', xs: '20px' },
				justifyContent: 'none',
			}}
			px='20px'>
			<Link to='/'>
				<img className='navBar-img' src={Logo} alt='logo' />
			</Link>
			<Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
				<Link to='/' className='navBarLinks'>
					Home
				</Link>
				<a className='navBar-ancher' href='#exercices'>
					Exercices
				</a>
			</Stack>
		</Stack>
	);
};

export default NavBar;
