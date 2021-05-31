import React from "react";
import { ChatEngine } from 'react-chat-engine';
import { useHistory } from "react-router";
import ChatFeed from "./ChatFeed";
const Chat = () => {

    let history = useHistory();

    const handleLogOut = ()=>{
        localStorage.clear();
        history.push('/signin');
    }
    
    return (
        <div>
            <div className='nav-bar'>
                <div className ='logo-tab'>
                    Chatting Software
                </div>
                <div onClick= {handleLogOut}className="logout-tab">
                    Log out 
                </div>
            </div>
            
            <ChatEngine
            height = "100vh"
            projectID= "1501218f-e751-4570-8896-2549d6c65eaf"
            userName={localStorage.getItem('username')}
            userPassword={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
            
        

        </div>
         
    );
    
}
export default Chat;