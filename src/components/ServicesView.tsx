import React from 'react';
import { Box } from '@mui/material';
import { NavBar } from './NavBar';
import { Header } from './Header';
import { RightSection } from './RightSection';
import { MiddleSection } from './MiddleSection';

export const ServicesView: React.FC = () => (
	<Box bgcolor={'#f5f6fa'} width={'100%'} height={'100%'}>
		<Header />
		<Box display={'flex'} mt={2} gap={3} paddingX={2}>
			<NavBar />
			<MiddleSection />
			<RightSection />
		</Box>
	</Box>
);


