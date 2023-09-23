import React from 'react'
import { Typography, List, Box, ListItemButton } from '@mui/material';

export const NavBar: React.FC = () => (
	<Box bgcolor={'#fff'} flex={1.5} height={'90%'} borderRadius={4}>
		<Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} mt={2}>
			<img src='services assets\user photo.png' alt='user photo' width={40} height={40} style={{ borderRadius: '50%' }} />
			<Typography variant='h5'>User Name</Typography>
			<img src='services assets\chart.svg' alt='persentage' />
		</Box>
		<Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={2} mb={5}>
			<List>
				<ListItemButton sx={{ bgcolor: '#f5f6fa', borderRadius: 25, marginBottom: 2 }}>
					<img src='services assets\Mask Group 91.svg' alt='home' />
					<Typography ml={2}>Home</Typography>
				</ListItemButton>
				<ListItemButton sx={{ marginBottom: 2 }}>
					<img src='services assets\Group 9016.svg' alt='My Institutions' />
					<Typography ml={2}>My Institutions</Typography>
				</ListItemButton>
				<ListItemButton sx={{ marginBottom: 2 }}>
					<img src='services assets\Mask Group 95.svg' alt='Institutions' />
					<Typography ml={2}>Institutions</Typography>
				</ListItemButton>
				<ListItemButton sx={{ marginBottom: 2 }}>
					<img src='services assets\Mask Group 110.svg' alt='Drugs' />
					<Typography ml={2}>Drugs</Typography>
				</ListItemButton>
				<ListItemButton sx={{ marginBottom: 2 }}>
					<img src='services assets\Mask Group 107.svg' alt='Doctor Online' />
					<Typography ml={2}>Doctor Online</Typography>
				</ListItemButton>
				<ListItemButton sx={{ marginBottom: 2 }}>
					<img src='services assets\Mask Group 80.svg' alt='Search Drugs' />
					<Typography ml={2}>Search Drugs</Typography>
				</ListItemButton>
				<ListItemButton>
					<img src='services assets\ic_offers.svg' alt='Offers' />
					<Typography ml={2}>Offers</Typography>
				</ListItemButton>
			</List>
		</Box>
	</Box>
);

