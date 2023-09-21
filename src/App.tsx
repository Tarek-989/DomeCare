import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { LoginPage } from './components/LoginPage';
import { ServicesView } from './components/ServicesView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
	const [cookies] = useCookies(['authToken']);
	const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.authToken);
	const onLogin = () => {
		setIsAuthenticated(true);
	}
	return (
		<Router>
			<ToastContainer />
			<Routes>
				<Route path='/login' element={isAuthenticated ? <Navigate to='/services' /> : <LoginPage onLogin={onLogin} />} />
				<Route path='/services' element={!isAuthenticated ? <Navigate to='/login' /> : <ServicesView />} />
				<Route path='/' element={<Navigate to='/login' />} />
			</Routes>
		</Router>
	);
}

export default App;
