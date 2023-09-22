import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginForm, LoginPageProps } from '../types';
import { useSubmit } from '../hooks/useSubmit';
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	InputAdornment,
	TextField,
	Typography,
} from '@mui/material';

const schema = yup.object().shape({
	username: yup.string().required(),
	password: yup.string().required()
});

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
	const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
		resolver: yupResolver(schema)
	});
	const onSubmit = useSubmit({ onLogin });
	return (
		<Box sx={{
			display: 'flex',
			height: '100vh',
			backgroundColor: '#f9fcff',
		}}>
			<Box sx={{
				flex: '1',
				backgroundImage: 'url(/login%20assets/img-web1.png)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}} />
			<Box sx={{
				flex: '1',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0 50px',
			}}>
				<Box sx={{
					width: '65%',  // reduce the content width by 30%
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center', // center content horizontally
				}}>
					<img src='login assets\Logo.png' alt='Logo' width={'45%'} style={{ marginTop: '5rem' }} />
					<Typography variant='h6' fontSize={15} mt={1}>Welcome back! Please login to your account.</Typography>
					<form
						onSubmit={handleSubmit(onSubmit)}
						style={{
							marginTop: 30,
						}}
					>
						<TextField
							{...register('username')}
							error={!!errors.username}
							helperText={errors.username?.message}
							variant='outlined'
							margin='normal'
							required
							fullWidth
							label='Username'
							placeholder='User Name or Number Phone'
							style={{
								borderRadius: 10,
								boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
							}}
							InputProps={{
								style: {
									borderRadius: 10,
								},
								startAdornment: (
									<InputAdornment position='start'>
										<img src='/login assets/ic_user.svg' alt='Username' style={{ width: '20px', height: '20px' }} />
									</InputAdornment>
								),
							}}
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<TextField
							{...register('password')}
							error={!!errors.password}
							helperText={errors.password?.message}
							variant='outlined'
							margin='normal'
							required
							fullWidth
							label='Password'
							type='password'
							style={{
								borderRadius: 10,
								boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
							}}
							InputProps={{
								style: {
									borderRadius: 10,
								},
								startAdornment: (
									<InputAdornment position='start'>
										<img src='/login assets/ic_password.svg' alt='Password' style={{ width: '20px', height: '20px' }} />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position='end'>
										<img src='/login assets/Mask Group 42.svg' alt='Toggle password visibility' style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
									</InputAdornment>
								),
							}}
							InputLabelProps={{
								shrink: true,
							}}
						/>

						<Box display='flex' justifyContent='space-between' width='100%' mt={2}>
							<FormControlLabel
								control={<Checkbox value='remember' color='primary' />}
								label='Remember me'
							/>
							<Typography
								variant='body2'
								color='primary'
							>
								Forgot Password?
							</Typography>
						</Box>

						<Box display='flex' justifyContent='space-evenly' width='100%' mt={3} gap={3}>
							<Button
								variant='outlined'
								color='primary'
								style={{
									flex: 1,
									borderColor: '#69a2fd',
									borderRadius: 10,
									boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
									textTransform: 'none',
									padding: 10
								}}
							>
								Register
							</Button>
							<Button
								variant='contained'
								color='primary'
								type='submit'
								style={{
									flex: 1,
									backgroundColor: '#3b86ff',
									borderRadius: 10,
									boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
									textTransform: 'none',
									padding: 10
								}}
							>
								Login
							</Button>
						</Box>
					</form>

					<Typography fontSize={10} variant='body2' align='center' style={{ marginTop: '6rem' }}>
						By signing up you agree to our Privacy Policy and Terms.
					</Typography>
				</Box>
			</Box >
		</Box >
	);
}

