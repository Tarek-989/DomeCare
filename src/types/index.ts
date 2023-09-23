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