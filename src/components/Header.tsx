import { Box, Hidden, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { HeaderProps } from '../types';

export const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
	return (
		<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'0 2rem'}>
			<Hidden mdUp>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer}>
					<MenuIcon />
				</IconButton>
			</Hidden>
			<Box display={'flex'} width={{ xs: '25%', md: '10%' }}>
				<img src='/services assets/Logo.png' alt='Logo' width={'100%'} />
			</Box>
			<Box display={'flex'} gap={2}>
				<Box display={'flex'} bgcolor={'#fff'} justifyContent='center' alignItems='center' borderRadius={'50%'} width={40} height={40}>
					<img src='/services assets/ic_chat.svg' alt='chat' width={20} height={20} />
				</Box>
				<Box display={'flex'} bgcolor={'#fff'} justifyContent='center' alignItems='center' borderRadius={'50%'} width={40} height={40}>
					<img src='/services assets/Group 7226.png' alt='notification' width={20} height={20} />
				</Box>
				<Box display={'flex'} bgcolor={'#fff'} justifyContent='center' alignItems='center' borderRadius={'50%'} width={40} height={40}>
					<img src='/services assets/ic_user.svg' alt='user' width={20} height={20} />
				</Box>
			</Box>
		</Box>
	)
}
