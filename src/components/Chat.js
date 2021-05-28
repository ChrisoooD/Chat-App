import React from "react";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./ChatFeed";
const Chat = () => {

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
export default Chat;