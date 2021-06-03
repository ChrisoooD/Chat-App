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
        console.log(response.data[0].id)
        var userID = response.data[0].id;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('id',userID);
        setError('');
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