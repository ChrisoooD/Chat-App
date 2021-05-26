import { ChatEngine } from 'react-chat-engine';
import React from "react";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import './App.css';

const App = () => {
    
    if(!localStorage.getItem('username')) return <LoginForm/>
    
    return (
        <ChatEngine
            height = "100vh"
            projectID= "1501218f-e751-4570-8896-2549d6c65eaf"
            userName={localStorage.getItem('username')}
            userPassword={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
        
    );
}

export default App;