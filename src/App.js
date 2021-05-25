import { ChatEngine } from 'react-chat-engine';
import React from "react";
import ChatFeed from "./components/ChatFeed";
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID= "1501218f-e751-4570-8896-2549d6c65eaf"
            userName="admin"
            userPassword="admin"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;