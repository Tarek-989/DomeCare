import React from 'react'
import { Typography, List, Box, ListItemButton } from '@mui/material';

export const NavBar: React.FC = () => (
	<Box bgcolor={'#fff'} flex={1.5} height={'90%'} borderRadius={4} p={{ xs: 2, md: 0 }}>
		<Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} mt={2}>
			<Box width={{ xs: 50, md: 40 }} height={{ xs: 50, md: 40 }} paddingX={2}>
				<img src='/services assets/user photo.png' alt='user photo' width={'100%'} height={'100%'} style={{ borderRadius: '50%' }} />
			</Box>
			<Typography variant='h5'>User Name</Typography>
			<Box width={{ xs: 50, md: 40 }} height={{ xs: 50, md: 40 }} paddingX={2}>
				<img src='/services assets/chart.svg' alt='persentage' width={'100%'} height={'100%'} />
			</Box>
		</Box>
		<Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={2} mb={5}>
			<List>
				<ListItemButton sx={{ bgcolor: '#f5f6fa', borderRadius: 25, marginBottom: 2 }}>
					<img src='/services assets/Mask Group 91.svg' alt='home' />
					<Typography ml={2}>Home</Typography>
				</ListItemButton>
				<ListItemButton sx={{ marginBottom: 2 }}>
					<img src='/services assets/Group 9016.svg' alt='My Institutions' />
					<Typography ml={2}>My Institutions</Typography>
				</ListItemButton>
				<ListItemButton sx={{ marginBottom: 2 }}>
					<img src='/services assets/Mask Group 95.svg' alt='Institutions' />
					<Typography ml={2}>Institutions</Typography>
				</ListItemButton>
				<ListItemButton sx={{ marginBottom: 2 }}>
					<img src='/services assets/Mask Group 110.svg' alt='Drugs' />
					<Typography ml={2}>Drugs</Typography>
				</ListItemButton>
				<ListItemButton sx={{ marginBottom: 2 }}>
					<img src='/services assets/Mask Group 107.svg' alt='Doctor Online' />
					<Typography ml={2}>Doctor Online</Typography>
				</ListItemButton>
				<ListItemButton sx={{ marginBottom: 2 }}>
					<img src='/services assets/Mask Group 80.svg' alt='Search Drugs' />
					<Typography ml={2}>Search Drugs</Typography>
				</ListItemButton>
				<ListItemButton>
					<img src='/services assets/ic_offers.svg' alt='Offers' />
					<Typography ml={2}>Offers</Typography>
				</ListItemButton>
			</List>
		</Box>
	</Box>
);

