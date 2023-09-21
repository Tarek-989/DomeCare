import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { LoginPage } from './components/LoginPage';
import { ServicesView } from './components/ServicesView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [cookies] = useCookies(['authToken']);
	const isAuthenticated = !!cookies.authToken;

	return (
		<Router>
			<ToastContainer />
			<Switch>
				<Route path="/login">
					{isAuthenticated ? <Redirect to="/services" /> : <LoginPage />}
				</Route>
				<Route path="/services">
					{!isAuthenticated ? <Redirect to="/login" /> : <ServicesView />}
				</Route>
				<Redirect from="/" to="/login" />
			</Switch>
		</Router>
	);
}

export default App;
