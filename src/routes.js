import Chat from "./components/Chat";
import CreateAccount from "./components/CreateAccount";
import LoginForm from "./components/LoginForm";

export const ROUTES = [
    { path: '/chat', component: Chat },
    { path: '/', component: LoginForm },
    { path: '/account', component: CreateAccount },
]