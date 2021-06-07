import React from 'react';
import { useHistory } from "react-router";
import {Link} from "react-router-dom"
import axios from 'axios';
export class Profile extends React.Component{

    constructor(props) {
        super(props);

        var url;
        if(localStorage.getItem('imageURL')=="null"){
            url = "https://via.placeholder.com/250";
        }
        else {
            url = localStorage.getItem('imageURL');
        }
    
        this.state={
            id: localStorage.getItem('id'),
            username:localStorage.getItem('username'),
            email:localStorage.getItem('email'),
            firstName: localStorage.getItem('firstName'),
            lastName:localStorage.getItem('lastName'),
            imageURL: url
        };
    }



    handleLogOut = ()=>{
        localStorage.clear();
    }

    // componentDidMount() {
    //     var axios = require('axios');
    //     var un = localStorage.getItem("username");
    //     var p = localStorage.getItem("password");
    //     var UserName="";
    //     var Email="";
    //     var FirstName="";
    //     var LastName="";
    //     const profileData ={ 'User-Name': un, 'User-Secret': p};
    //     var temp = 'https://api.chatengine.io/users/' +this.state.id +'/';
    //     var config = {
    //         method: 'get',
    //         url: temp,
    //         headers: {
    //           'PRIVATE-KEY': process.env.REACT_APP_CHAT_KEY
    //         },
    //         data: profileData
    //       };
         

    //     axios(config)
    //         .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //         console.log("success");
    //         console.log("LOG",response.data.username);
    //         UserName = response.data.username;
    //         Email = response.data.email;
    //         FirstName = response.data.first_name;
    //         LastName = response.data.last_name;

            
    //         })
    //     .catch(function (error) {
    //         console.log(error);
    //         console.log("failure");
    //         });

    //         this.changeState();
    //         this.setState({
    //             username: UserName,
    //             email: Email,
    //             firstName: FirstName,
    //             lastName: LastName
    //         })
    // }

    render(){
        return (
            <div>
                <div className='nav-bar'>
                    <Link to="/chat" className="back-tab">Back</Link>

                    <Link to="/signin" onClick={this.handleLogOut} className="logout-tab">Logout</Link>
                </div>
                <p className="profile-text">Username: {this.state.username}</p>

                <p className="profile-text">Email: {this.state.email}</p>

                <p className="profile-text">First Name: {this.state.firstName}</p>

                <p className="profile-text">Last Name: {this.state.lastName}</p>
                <div className="profile-pic">
                    <p style= {{marginBottom: "1em", left:"50%", position: "relative"}}>Avatar</p>
                    <img className="avatar" src= {this.state.imageURL} alt="Avatar"></img>
                </div>
                
            </div>
        )
    }
    
}

export default Profile