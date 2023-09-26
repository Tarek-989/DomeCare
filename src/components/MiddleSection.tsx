import React, { useState } from 'react'
import { Service, ServicesProps } from '../types';
import HomeIcon from '@mui/icons-material/Home';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, Breadcrumbs, Typography, Divider, IconButton, Grid, Dialog, DialogContent, TextField, Button, DialogActions, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const MiddleSection: React.FC<ServicesProps> = ({ Services, setServices }) => {
	const [havechildren, setHavechildren] = useState(false);
	const [havechildren2, setHavechildren2] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [serviceToEdit, setServiceToEdit] = useState<Service | null>(null);

	const removeService = (services: Array<Service>, id: string): Array<Service> => {
		return services.reduce((acc, service) => {
			if (service.id === id) return acc;
			if (service.children) {
				return [
					...acc,
					{
						...service,
						children: removeService(service.children, id),
					},
				];
			}
			return [...acc, service];
		}, [] as Array<Service>);
	};

	const handleDelete = (id: string) => {
		const newServices = removeService(Services, id);
		setServices(newServices);
	};

	const editServiceRecursive = (services: Array<Service>, updatedService: Service): Array<Service> => {
		return services.map(service => {
			if (service.id === updatedService.id) {
				return updatedService;
			}
			if (service.children) {
				return {
					...service,
					children: editServiceRecursive(service.children, updatedService)
				};
			}
			return service;
		});
	};
	const handleEditSubmit = (updatedService: Service) => {
		const updatedServices = editServiceRecursive(Services, updatedService);
		setServices(updatedServices);
		setServiceToEdit(null);
		setOpenDialog(false);
	};

	const handleEditClick = (service: Service) => {
		setServiceToEdit(service);
		setOpenDialog(true);
	};

	const navigate = useNavigate();

	const handleAddButtonClick = () => {
		navigate('/services/add');
	};

	return (
		<Box display={'flex'} flexDirection={'column'} flex={3} height={'80%'} >
			<Breadcrumbs separator={<KeyboardDoubleArrowRightIcon sx={{ fontSize: '12px' }} />} aria-label='breadcrumb' color='black'>
				<Typography variant='h2' fontSize={13} sx={{ display: 'flex', alignItems: 'center' }} color={'#3b86ff'}>
					<HomeIcon sx={{ mr: 1 }} fontSize={'small'} />
					Home
				</Typography>
				<Typography variant='h2' color='black' fontSize={13}>Profile</Typography>
				<Typography variant='h2' color='black' fontSize={13}>Services</Typography>
			</Breadcrumbs>
			<Box display={'flex'} justifyContent={'center'} mt={2} alignItems={'center'} gap={2}>
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'#e7e9ef'} width={60} height={50} borderRadius={3}>
					<img src='/services assets/ic_user.svg' alt='user' />
				</Box>
				<Divider orientation='vertical' flexItem sx={{ height: 25, marginTop: 1.5 }} />
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'#e7e9ef'} width={60} height={50} borderRadius={3}>
					<img src='/services assets/Mask Group 123.svg' alt='user' />
				</Box>
				<Divider orientation='vertical' flexItem sx={{ height: 25, marginTop: 1.5 }} />
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'#fff'} width={60} height={50} borderRadius={3}>
					<img src='/services assets/Group 8678.svg' alt='Group' width={80} />
				</Box>
				<Divider orientation='vertical' flexItem sx={{ height: 25, marginTop: 1.5 }} />
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'#e7e9ef'} width={60} height={50} borderRadius={3}>
					<img src='/services assets/ic_my_order.svg' alt='my order' />
				</Box>
			</Box>
			<Box mt={2} borderRadius={3} bgcolor={'#fff'} padding={3}>
				<Typography variant='h5'>
					Services
					<Divider component='div' sx={{ width: 50, bgcolor: '#3b86ff', height: 3, borderRadius: 3 }} />
				</Typography>
				<Box display={'flex'} justifyContent={'flex-end'} mt={2}>
					<Box bgcolor={'#ebf3ff'} sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
						<IconButton onClick={handleAddButtonClick}>
							<img src='/services assets/1827996.svg' alt='link' />
						</IconButton>
					</Box>
				</Box>
				<Box display={'flex'} justifyContent={'space-between'} mt={1} bgcolor={'#ebf3ff'} paddingX={5} paddingY={2} borderRadius={3}>
					<Typography color={'#3b86ff'}>Service Name</Typography>
					<Typography color={'#3b86ff'}>Actions</Typography>
				</Box>
				{Services.map((Service) => (
					<>
						<Box key={Service.id} display={'flex'} gap={1} paddingY={1} alignItems={'center'} >
							{Service.children?.length ? <IconButton onClick={() => setHavechildren(!havechildren)}>
								<img src='/services assets/small-down.svg' alt='arrow down' width={15} />
							</IconButton> : <Box width={30}></Box>}
							<Box display={'flex'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
								<Typography>{Service.name}</Typography>
								<Box mr={3}>
									<IconButton onClick={() => handleDelete(Service.id)}><img src='/services assets/Mask Group 35.svg' alt='delete' /></IconButton>
									<IconButton onClick={() => handleEditClick(Service)}><img src='/services assets/ic_edite.svg' alt='edit' /></IconButton>
								</Box>
							</Box>
						</Box>
						{havechildren ? Service.children?.map((item) => (
							<>
								<Box key={item.id} display={'flex'} gap={1} paddingY={1} ml={1} alignItems={'center'} bgcolor={'#f5f9ff'}>
									{item.children?.length ? <IconButton onClick={() => setHavechildren2(!havechildren2)}>
										<img src='/services assets/small-down.svg' alt='arrow down' width={15} />
									</IconButton> : <Box width={30}></Box>}
									<Box display={'flex'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
										<Typography>{item.name}</Typography>
										<Box mr={3}>
											<IconButton onClick={() => handleDelete(item.id)}><img src='/services assets/Mask Group 35.svg' alt='delete' /></IconButton>
											<IconButton onClick={() => handleEditClick(item)}><img src='/services assets/ic_edite.svg' alt='edit' /></IconButton>
										</Box>
									</Box>
								</Box>
								{havechildren2 ? item.children?.map((val) => (
									<Box key={val.id} display={'flex'} gap={1} paddingY={1} ml={1} alignItems={'center'} bgcolor={'#ebf3ff'}>
										<Box width={30}></Box>
										<Box display={'flex'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
											<Typography>{val.name}</Typography>
											<Box mr={3}>
												<IconButton onClick={() => handleDelete(val.id)}><img src='/services assets/Mask Group 35.svg' alt='delete' /></IconButton>
												<IconButton onClick={() => handleEditClick(val)}><img src='/services assets/ic_edite.svg' alt='edit' /></IconButton>
											</Box>
										</Box>
									</Box>
								)) : null}
							</>
						)) : null}
					</>
				))}
			</Box>
			<Box mt={2} mb={2} borderRadius={3} bgcolor={'#fff'} padding={3}>
				<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
					<Typography variant='h5'>
						Products
						<Divider component='div' sx={{ width: 50, bgcolor: '#3b86ff', height: 3, borderRadius: 3 }} />
					</Typography>
					<Box>
						<KeyboardArrowLeft sx={{ color: '#3b86ff', mr: 1 }} />
						<KeyboardArrowRight sx={{ color: '#3b86ff' }} />
					</Box>
				</Box>
				<Grid container spacing={2} justifyContent='center' mt={1}>
					<Grid item xs={12} sm={6} md={3}>
						<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
							<img src='/services assets/Group 6896.svg' alt='Product' style={{ maxWidth: '100%' }} />
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
							<img src='/services assets/Group 6896.svg' alt='Product' style={{ maxWidth: '100%' }} />
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
							<img src='/services assets/Group 6896.svg' alt='Product' style={{ maxWidth: '100%' }} />
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
							<img src='/services assets/Group 6896.svg' alt='Product' style={{ maxWidth: '100%' }} />
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Dialog
				open={openDialog}
				onClose={() => setOpenDialog(false)}
			>
				<DialogTitle>Edit Service</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Service Name'
						type='text'
						fullWidth
						defaultValue={serviceToEdit?.name}
						onChange={e => setServiceToEdit({ ...serviceToEdit!, name: e.target.value })}
					/>
				</DialogContent>
				<DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row-reverse', gap: 2 }}>
					<Button
						onClick={() => setOpenDialog(false)}
						color='primary'
						variant='outlined'
						sx={{
							paddingY: 1,
							paddingX: 2.5,
							borderColor: '#69a2fd',
							borderRadius: 10,
							boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
							textTransform: 'none',
						}}
					>
						Cancel
					</Button>
					<Button
						variant='contained'
						color='primary'
						sx={{
							paddingY: 1,
							paddingX: 2.5,
							backgroundColor: '#3b86ff',
							borderRadius: 10,
							boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
							textTransform: 'none',
						}}
						onClick={() => {
							if (serviceToEdit) {
								handleEditSubmit(serviceToEdit);
							}
						}}
					>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</Box >
	)
}
