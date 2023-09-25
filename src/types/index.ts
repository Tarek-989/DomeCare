export interface LoginForm {
	username: string;
	password: string;
}

export interface LoginPageProps {
	onLogin: () => void;
}
export interface Service {
	id: string;
	name: string;
	children?: Service[];
	checked?: boolean;
}
export interface ServiceViewProps {
	service: Service;
	onToggle: (id: string) => void
}
export interface HeaderProps {
	toggleDrawer: () => void;
}

export interface ServicesProps {
	Services: Array<Service>;
	setServices: React.Dispatch<React.SetStateAction<Array<Service>>>;
}