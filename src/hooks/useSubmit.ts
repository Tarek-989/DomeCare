import { useCookies } from "react-cookie";
import { LoginForm, LoginPageProps } from "../types";
import { toast } from 'react-toastify';
import { SubmitHandler } from "react-hook-form";
import axios from 'axios';


export const useSubmit = ({ onLogin }: LoginPageProps) => {
	const [, setCookie] = useCookies(['authToken']);

	const onSubmit: SubmitHandler<LoginForm> = async (data) => {
		try {
			const response = await axios.post('https://dummyjson.com/auth/login', data, {
				headers: { 'Content-Type': 'application/json' }
			});

			if (response?.data?.token) {
				setCookie('authToken', response.data.token, { path: '/' });
				toast.success('Logged in successfully!');
				onLogin();
			} else {
				toast.error('Login failed!');
			}
		} catch (error) {
			toast.error('Error logging in.');
		}
	};

	return onSubmit;
}


