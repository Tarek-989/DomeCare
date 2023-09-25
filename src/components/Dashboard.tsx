import React, { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import { NavBar } from './NavBar';
import { Header } from './Header';
import { RightSection } from './RightSection';
import { MiddleSection } from './MiddleSection';

export const Dashboard: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = useState(false)
	const toggleDrawer = () => setDrawerOpen(!drawerOpen)

	return (
		<Box bgcolor={'#f5f6fa'} width={'100%'} height={'100%'}>
			<Header toggleDrawer={toggleDrawer} />
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={toggleDrawer}
				sx={{ display: { xs: 'block', md: 'none' } }}  // Only show on mobile
			>
				<NavBar />
			</Drawer>
			<Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} mt={2} gap={3} paddingX={2}>
				<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
					<NavBar />
				</Box>
				<MiddleSection />
				<RightSection />
			</Box>
		</Box>
	)
};


