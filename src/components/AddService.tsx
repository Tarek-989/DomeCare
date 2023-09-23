import React, { useState } from 'react';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Box, Breadcrumbs, Typography, Divider, IconButton, InputAdornment, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { initServices } from '../data/services';
import { useNavigate } from 'react-router-dom';


export const AddService: React.FC = () => {
	const [havechildren, setHavechildren] = useState(false);
	const [havechildren2, setHavechildren2] = useState(false);
	const [Services, setServices] = useState(initServices);
	const navigate = useNavigate();

	const handleBackButtonClick = () => {
		navigate('/services');
	};

	return (
		<Box bgcolor={'#f5f6fa'} width={'100%'} height={'100%'}>
			<Header />
			<Box display={'flex'} mt={2} gap={3} paddingX={2}>
				<Box display={'flex'} flex={1}>
					<NavBar />
				</Box>
				<Box display={'flex'} flexDirection={'column'} flex={3} height={'80%'} >
					<Breadcrumbs separator='>>' aria-label='breadcrumb'>
						<Typography variant='h2' fontSize={18} color={'#3b86ff'}>
							<HomeIcon sx={{ mr: 1 }} fontSize={'small'} />
							Home
						</Typography>
						<Typography variant='h2' fontSize={18}>Profile</Typography>
						<Typography variant='h2' fontSize={18}>Services</Typography>
						<Typography variant='h2' fontSize={18}>Add Services</Typography>
					</Breadcrumbs>

					<Box mt={2} borderRadius={3} bgcolor={'#fff'} padding={3}>
						<Typography variant='h5'>
							Services
							<Divider component='div' sx={{ width: 50, bgcolor: '#3b86ff', height: 3, borderRadius: 3 }} />
						</Typography>
						<Box display={'flex'} justifyContent={'space-between'} mt={2}>
							<Box>
								<TextField
									variant='outlined'
									margin='normal'
									placeholder='Add New Services'
									fullWidth
									style={{
										borderRadius: 25,
										boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
									}}
									InputProps={{
										style: {
											borderRadius: 25,
										},
										startAdornment: (
											<InputAdornment position='start'>
												<img src='/services assets/Mask Group 122.svg' alt='Search' style={{ width: '20px', height: '20px' }} />
											</InputAdornment>
										),
									}}
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Box>
							<Box display={'flex'} alignItems={'center'} gap={1}>
								<IconButton onClick={handleBackButtonClick}>
									<img src='/services assets/Group 8959.svg' alt='return' />
								</IconButton>
								<Box display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'#3b86ff'}
									paddingRight={2} paddingLeft={1} sx={{ borderTopLeftRadius: 40, borderBottomLeftRadius: 40, width: 100, height: 50 }}>
									<Typography variant='h5' color={'#fff'}>
										Link
									</Typography>
								</Box>
							</Box>
						</Box>
						{Services.map((Service) => (
							<>
								<Box key={Service.id} display={'flex'} gap={1} paddingY={1} alignItems={'center'} >
									{Service.children?.length ? <IconButton onClick={() => setHavechildren(!havechildren)}>
										<img src='/services assets\small-down.svg' alt='arrow down' width={15} />
									</IconButton> : <Box width={30}></Box>}
									<Typography>{Service.name}</Typography>
								</Box>
								{havechildren ? Service.children?.map((item) => (
									<>
										<Box key={item.id} display={'flex'} gap={1} paddingY={1} ml={1} alignItems={'center'} bgcolor={'#f5f9ff'}>
											{item.children?.length ? <IconButton onClick={() => setHavechildren2(!havechildren2)}>
												<img src='/services assets\small-down.svg' alt='arrow down' width={15} />
											</IconButton> : <Box width={30}></Box>}
											<Typography>{item.name}</Typography>
										</Box>
										{havechildren2 ? item.children?.map((val) => (
											<Box key={val.id} display={'flex'} gap={1} paddingY={1} ml={1} alignItems={'center'} bgcolor={'#ebf3ff'}>
												<Box width={30}></Box>
												<Typography>{val.name}</Typography>
											</Box>
										)) : null}
									</>
								)) : null}
							</>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
