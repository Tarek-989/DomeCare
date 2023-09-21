export interface LoginForm {
	username: string;
	password: string;
}

export interface LoginPageProps {
	onLogin: () => void;
}