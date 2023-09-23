import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

export const RightSection: React.FC = () => (
	<Box bgcolor={'#fff'} flex={1.5} height={'90%'} borderRadius={4} display={'flex'} flexDirection={'column'}>
		<img src='services assets\user photo.png' alt='user photo' style={{ width: '100%', borderRadius: 15 }} />
		<Box mt={3} padding={2}>
			<Typography variant='h5'>
				Lorem ipsum
			</Typography>
			<Typography variant='h6' fontSize={16} color={'#a4afb7'}>
				Lorem ipsum dolor sit amet, consectetur adipiscing
			</Typography>
			<Divider component='div' sx={{ bgcolor: '#f5f6fa', mt: 2 }} />
		</Box>
		<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddingLeft={2}>
			<Typography variant='h5'>
				Contact Us
				<Divider component='div' sx={{ width: 50, bgcolor: '#3b86ff', height: 3, borderRadius: 3 }} />
			</Typography>
			<Box bgcolor={'#3b86ff'} paddingRight={2} paddingLeft={1} sx={{ borderTopLeftRadius: 25, borderBottomLeftRadius: 25 }}>
				<img src='services assets\ic_edite.png' alt='ic edite' width={40} />
			</Box>
		</Box>
		<Box display={'flex'} flexDirection={'column'} paddingLeft={2} mt={2} gap={1}>
			<Box display={'flex'} gap={2} alignItems={'center'} >
				<img src='services assets\ic_phone.svg' alt='ic phone' width={20} />
				<Typography variant='body2'>
					+963 123 456 789
				</Typography>
			</Box>
			<Box display={'flex'} gap={2} alignItems={'center'} >
				<img src='services assets\Mask Group 46.svg' alt='net' width={20} />
				<Typography variant='body2'>
					Lorem Ipsum dolor sit
				</Typography>
			</Box>
			<Box display={'flex'} gap={2} alignItems={'center'} >
				<img src='services assets\ic_facebook.svg' alt='ic facebook' width={20} />
				<Typography variant='body2'>
					Lorem Ipsum dolor sit
				</Typography>
			</Box>
			<Box display={'flex'} gap={2} alignItems={'center'} >
				<img src='services assets\ic_instagram.svg' alt='ic instagram' width={20} />
				<Typography variant='body2'>
					Lorem Ipsum dolor sit
				</Typography>
			</Box>
			<Box display={'flex'} gap={2} alignItems={'center'} mb={7}>
				<img src='services assets\ic_linkedin.svg' alt='ic linkedin' width={20} />
				<Typography variant='body2'>
					Lorem Ipsum dolor sit
				</Typography>
			</Box>
		</Box>
	</Box>
)
