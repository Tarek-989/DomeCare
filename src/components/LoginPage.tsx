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
	Hidden
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
			<Hidden smDown>
				<Box sx={{
					flex: '1',
					backgroundImage: 'url(/login%20assets/img-web1.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}} />
			</Hidden>
			<Box sx={{
				flex: '1',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0 50px',
			}}>
				<Box sx={{
					width: { xs: '85%', md: '70%' },
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<Box sx={{ width: { xs: '70%', md: '49%' }, marginTop: '5rem' }}>
						<img src='/login assets/Logo.png' alt='Logo' width='100%' />
					</Box>
					<Typography variant='h6' fontSize={17} mt={1}>Welcome back! Please login to your account.</Typography>
					<form
						onSubmit={handleSubmit(onSubmit)}
						style={{
							marginTop: 30,
							width: '100%'
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
							placeholder='Password'
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

						<Box display='flex' justifyContent='space-between' alignItems='center' width='100%' mt={2}>
							<FormControlLabel
								control={<Checkbox value='remember' />}
								label='Remember me'
								sx={{ '& .MuiButtonBase-root': { color: 'rgba(0, 0, 0, 0.23)' }, '& .MuiTypography-root': { color: '#504e4e', fontSize: '13px' } }}
							/>
							<Typography
								variant='body2'
								sx={{ color: '#504e4e', fontSize: '12px' }}
							>
								Forgot Password
							</Typography>
						</Box>

						<Box display='flex' justifyContent='space-evenly' width='100%' mt={3} gap={3} flexDirection={{ xs: 'column-reverse', sm: 'row' }}>
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
				</Box>
					<Typography fontSize={10} variant='body2' align='center' sx={{ paddingBottom: { xs: '1rem', md: '0.5rem'	 }}} style={{ marginTop: '6rem', display: 'flex' }}>
						By signing up you agree to our <Typography fontSize={10} variant='body2' sx={{ textDecoration: 'underline' }}>&nbsp;Privacy Policy and Terms.</Typography>
					</Typography>
			</Box >
		</Box >
	);
}

