import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { AddService, Dashboard, LoginPage } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initServices } from './data/services';

const App: React.FC = () => {
	const [cookies] = useCookies(['authToken']);
	const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.authToken);
	const onLogin = () => {
		setIsAuthenticated(true);
	}
	const [Services, setServices] = useState(initServices);
	return (
		<Router>
			<ToastContainer />
			<Routes>
				<Route path='/login' element={isAuthenticated ? <Navigate to='/services' /> : <LoginPage onLogin={onLogin} />} />
				<Route path='/services' element={!isAuthenticated ? <Navigate to='/login' /> : <Dashboard Services={Services} setServices={setServices} />} />
				<Route path='/services/add' element={!isAuthenticated ? <Navigate to='/login' /> : <AddService Services={Services} setServices={setServices} />} />
				<Route path='/' element={<Navigate to='/login' />} />
			</Routes>
		</Router>
	);
}

export default App;
