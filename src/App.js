import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

import ExerciceDetails from './pages/exercices/ExerciceDetails';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
	return (
		<Box
			width='18rem'
			className='App'
			sx={{ width: { x1: '1488px' } }}
			m='auto'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exercice/:id' element={<ExerciceDetails />} />
			</Routes>
			<Footer />
		</Box>
	);
}

export default App;
