import { Service } from "../types";

export const initServices: Array<Service> = [
	{
		id: '1',
		name: 'Service 1',
		checked: false,
		children: [
			{
				id: '1.1',
				name: 'Service 1.1',
				checked: false,
				children: [
					{ id: '1.1.1', name: 'Service 1.1.1', checked: false, },
					{ id: '1.1.2', name: 'Service 1.1.2', checked: false, },
				],
			},
			{ id: '1.2', name: 'Service 1.2', checked: false, },
		],
	},
	{
		id: '2',
		name: 'Service 2',
		checked: false,
	},
];
