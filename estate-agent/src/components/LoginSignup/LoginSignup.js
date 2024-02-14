import React, { useState } from "react";
import '../styles/LoginSignup.css';
import profile from '../../assets/profile.png';
import email from '../../assets/email.png';
import lock from '../../assets/lock.jpg';
import {useNavigate} from 'react-router-dom';

const LoginSignup = () => {

    const [action, setAction] = useState('Sign Up');
    const [formData, setForm] = useState({});
    const navigate = useNavigate();

    const login = (e) =>{
        e.preventDefault();
        delete formData[Object.keys(formData)[0]];        
        console.log(formData);
        //code to check if email and password match users fetch email and password
        navigate('/About');

    }

    const signUp = (e) =>{
        e.preventDefault();
        console.log(formData);
        fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
        setAction("Login");
    }


    return (
        
        <div className='optionContainer'>
        <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => { setAction("Sign Up") }} >Sign Up</div>
        <div className={action === "Sign Up" ? "submit grey" : "submit"} onClick={() => { setAction("Login") }} >Login</div>
        
        <div className='container'>      
            <div className='header'>
                <div className='title'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? <div></div> : <div className='input'>
                    <img src={profile} alt='silhouette icon image of a person' />
                    <input type="text" id="name" name="name" placeholder="Name" onInput={e => setForm({ ...formData, name: e.target.value })} />
                </div>}
                <div className='input'>
                    <img src={email} alt='silhouette icon image of an email evelope' />
                    <input type="email" id="email" name="email" placeholder="Email Address" onInput={e => setForm({ ...formData, email: e.target.value })} />
                </div>
                <div className='input'>
                    <img src={lock} alt='silhouette icon image of a padlock' />
                    <input type="password" id="password" name="password" placeholder="Password" onInput={e => setForm({ ...formData, password: e.target.value })} />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgotPassword">Lost Password? <span>Click Here!</span></div>}
            <div className='submitContainer'>
                {action === "Login" ? <button onClick={(login)}>Login</button> : <button onClick={(signUp)}>Sign Up</button>}
            </div>
        </div>
        </div>
    );
};

export default LoginSignup;