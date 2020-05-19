import React, { useState } from 'react';
import { authAxios } from '../utils/authAxios'

export default function Login(props){
    const [credintials, setCredintials] = useState({
        username: "",
        password: ""
    });
  
    const handleChange = (event) => (
        setCredintials({
            ...credintials,
            [event.target.name]: event.target.value})
    )
    
    const loginSubmit = e => {
        e.preventDefault();
        authAxios()
            .post(`/login`, credintials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                props.history.push('/friendslist');
            })
            .catch(err => {
              console.log(err)
             })
    };
   

    return(
        <form onSubmit={loginSubmit}>
            <label>Username</label>
            <input type="text" 
                   placeholder="Username" 
                   name="username" 
                   value={credintials.username}
                   onChange={handleChange}    
                   />
            <br />
            <label>Password</label>
            <input type="password" 
                   placeholder="Password"
                   name="password" 
                   value={credintials.password}
                   onChange={handleChange}
                   />
            <br />
                <button type="submit" onSubmit={loginSubmit}>Submit</button>
        </form>
    )


}
