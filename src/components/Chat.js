import React from "react";
import { ChatEngine } from 'react-chat-engine';
import { useHistory } from "react-router";
import ChatFeed from "./ChatFeed";
import {Link} from "react-router-dom"
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
                <Link to='/profile' className="profile-tab">Profile
                </Link>
                
                <div onClick= {handleLogOut}className="logout-tab">
                    Log out 
                </div>
            </div>
            
            <ChatEngine
            height = "100vh"
            projectID= {process.env.REACT_APP_CHAT_ID}
            userName={localStorage.getItem('username')}
            userPassword={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
        </div>
    );
}
export default Chat;