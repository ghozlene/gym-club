import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

import ExerciceDetails from './pages/ExerciceDetails';
import Navbar from './components/NavBar.jsx';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
	return (
		<Box
			width='18rem'
			className='App'
			sx={{ width: { x1: '1488px' } }}
			m='auto'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exercice/:id' element={<ExerciceDetails />} />
			</Routes>
			<Footer />
		</Box>
	);
}

export default App;
