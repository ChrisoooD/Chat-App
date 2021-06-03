import Chat from "./components/Chat";
import CreateAccount from "./components/CreateAccount";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile"
export const ROUTES = [
    { path: '/chat', component: Chat },
    { path: '/signin', component: LoginForm },
    { path: '/profile', component: Profile},
    { path: '/', component: CreateAccount }
   
]