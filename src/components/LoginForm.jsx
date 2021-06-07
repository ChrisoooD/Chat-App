import { useState,setState } from 'react';
import axios from 'axios';
import React from "react";
import {useHistory} from "react-router-dom"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const LoginForm = () => {
  let history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': process.env.REACT_APP_CHAT_ID, 'User-Name': username, 'User-Secret': password};

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })
      .then(response =>{
        console.log(response);
        
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        setError('');

        const profileData ={ 'User-Name': username, 'User-Secret': password};
        var config = {
            method: 'get',
            url: 'https://api.chatengine.io/users/',
            headers: {
              'PRIVATE-KEY': process.env.REACT_APP_CHAT_KEY
            },
            data: profileData
          };
         

        axios(config)
            .then(function (response) {
            
              // console.log("RESPONSE",response.data.avatar);
            
            var myArray = response.data;

            myArray.forEach((element, index, array) => {
              console.log("RESPONSEa",element.avatar);
              if(element.username ==username){
                // console.log("RESPONSE",element.avatar);
                localStorage.setItem('id', element.id);
                localStorage.setItem('email', element.email);
                localStorage.setItem('firstName', element.first_name);
                localStorage.setItem('lastName', element.last_name);
                localStorage.setItem('imageURL', element.avatar);
                // console.log("FOUND");
                // console.log(element.id)
              }
            });

  
            
            console.log("success");
          

            })
        .catch(function (error) {
            console.log(error);
            console.log("failure");
            });
            
        history.push("/chat");

      }
      )
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }


  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button" value="Redirect">
              <span>Start chatting</span>
            </button>
            <Link to ="/" type="submit" className="button" value="Redirect">
              <button type="submit" className="button" value="Redirect" style={{width:'270px'}}>create</button> 
            </Link>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;