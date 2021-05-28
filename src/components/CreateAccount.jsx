import { useState,setState } from 'react';
import axios from 'axios';
import React from "react";
import {useHistory} from "react-router-dom"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//const projectID = '1501218f-e751-4570-8896-2549d6c65eaf';
//const privateKey = 'a3f0e6e7-b148-49f8-ac01-49efe673b623';

const CreateAccount = () => {
  let history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    //const authObject = { 'Private-Key': privateKey};

    try {
      await axios.post('https://api.chatengine.io/users/', {headers: {'PRIVATE-KEY': 'a3f0e6e7-b148-49f8-ac01-49efe673b623'}}, 
      {data:{"username":username,"secret": password, "email": "", "first_name":"","last_name":"","custom_json":""}});

    //   localStorage.setItem('username', username);
    //   localStorage.setItem('password', password);

      //window.location.reload();
      setError('');
      history.push("/account");

    } catch (err) {
      setError('Oops, did not creat account.');
    }
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
            <Link to ="/signin"  type="submit" className="button" value="Redirect" >
            <span>sign in</span>
            </Link>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default CreateAccount;