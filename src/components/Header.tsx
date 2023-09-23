import { Box } from '@mui/material'
import React from 'react'

export const Header: React.FC = () => {
	return (
		<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'0 2rem'}>
			<img src='services assets\Logo.png' alt='Logo' width={'10%'} />
			<Box display={'flex'} gap={2}>
				<Box display={'flex'} bgcolor={'#fff'} justifyContent='center' alignItems='center' borderRadius={'50%'} width={40} height={40}>
					<img src='services assets\ic_chat.svg' alt='chat' width={20} height={20} />
				</Box>
				<Box display={'flex'} bgcolor={'#fff'} justifyContent='center' alignItems='center' borderRadius={'50%'} width={40} height={40}>
					<img src='services assets\Group 7226.png' alt='notification' width={20} height={20} />
				</Box>
				<Box display={'flex'} bgcolor={'#fff'} justifyContent='center' alignItems='center' borderRadius={'50%'} width={40} height={40}>
					<img src='services assets\ic_user.svg' alt='user' width={20} height={20} />
				</Box>
			</Box>
		</Box>
	)
}
