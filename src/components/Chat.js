import React from "react";
import { ChatEngine } from 'react-chat-engine';
import { useHistory } from "react-router";
import ChatFeed from "./ChatFeed";
const Chat = () => {

    let history = useHistory();
    let lightTheme = true;
    const handleLogOut = ()=>{
        localStorage.clear();
        history.push('/signin');
    }
    
    const changeTheme =() =>{
        let elems = document.querySelector('*');
        if(lightTheme){
            elems.style.color = "white";
            elems.style.backgroundColor ="black";
        }
        else{
            elems.style.color = "black";
            elems.style.backgroundColor ="white";
        }
        
        
        lightTheme = !lightTheme; 
    }



    
    return (
        <div>
            <div className='nav-bar'>
                <div className ='logo-tab'>
                    Chatting Software
                </div>
                <div onClick={changeTheme} className ="theme">
                     Change Theme
                </div>
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