import React from 'react';
import { useHistory } from "react-router";
import {Link} from "react-router-dom"
import axios from 'axios';
export class Profile extends React.Component{

    state={
        id: localStorage.getItem('id'),
        username:'',
        email:'',
        firstName:'',
        lastName:''
    };

    handleLogOut = ()=>{
        localStorage.clear();
    }
    componentDidMount() {
        var un = localStorage.getItem("username");
        var p = localStorage.getItem("password");
        
        const authObject = { 'Project-ID': process.env.REACT_APP_CHAT_ID, 'User-Name': un, 'User-Secret': p, };

        

        var config = {
            method: 'get',
            url: 'https://api.chatengine.io/users/{{this.state.id}}/',
            headers: {
              'PRIVATE-KEY': process.env.REACT_APP_CHAT_KEY
            },
            data : authObject
          };
          console.log("ID",this.state.id);

          axios(config)
            .then(function (response) {
	        console.log(response);
            console.log("success");
            })
        .catch(function (error) {
            console.log(error);
            console.log("failure");
            });

    }
    render(){
        return (
            <div>
                <div className='nav-bar'>
                    <Link to="/chat" className="back-tab">Back</Link>

                    <Link to="/signin" onClick={this.handleLogOut} className="logout-tab">Logout</Link>
                </div>
                <p className="profile-text">Username {this.state.username}</p>

                <p className="profile-text">Email</p>

                <p className="profile-text">First Name</p>

                <p className="profile-text">Last Name</p>
            </div>
        )
    }
    
}

export default Profile