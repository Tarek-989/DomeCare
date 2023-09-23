import React from 'react';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';


export const AddService: React.FC = () => {
	return (
		<Box bgcolor={'#f5f6fa'} width={'100%'} height={'100%'}>
			<Header />
			<Box display={'flex'} mt={2} gap={3} paddingX={2}>
				<NavBar />
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
				</Box>
			</Box>
		</Box>
	)
}
