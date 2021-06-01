import { useState,setState } from 'react';
import axios from 'axios';
import React from "react";
import {useHistory} from "react-router-dom"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const CreateAccount = () => {
  let history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  var data = {
    "username": username,
    "secret": password,
  };
  var config = {
    method: 'post',
    url: 'https://api.chatengine.io/users/',
    headers: {
      'PRIVATE-KEY': process.env.REACT_APP_CHAT_KEY
    },
    data : data
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios(config)
    .then(function (response) {
	  console.log(JSON.stringify(response.data));
    history.push('/chat');
    })
.catch(function (error) {
	console.log(error);
});
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Create Account</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button" value="Redirect">
              <span>Create</span>
            </button>
            <Link to ="/signin" >
              <button type="submit" className="button" value="Redirect" >sign in</button>
            </Link>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default CreateAccount;