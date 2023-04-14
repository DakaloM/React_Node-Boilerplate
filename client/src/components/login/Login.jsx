import React, { useState } from 'react';
import "./login.scss";
import CloseIcon from '@mui/icons-material/Close';

const Login = ({setPopupOpen}) => {
    const [loginOpen, setLoginOpen] = useState(true);
    const [registerOpen, setRegisterOpen] = useState(false);

    const openRegister  = () => {
        setLoginOpen(false);
        setRegisterOpen(true);
    }
    const openLogin  = () => {
        setRegisterOpen(false);
        setLoginOpen(true);
    }
  return (
    <div className='login'>
        <div className="container">
            <span className='close' onClick={(e) => setPopupOpen(false)}><CloseIcon className='icon' /></span>
            {loginOpen && (
                <div className="top ">
                    <h1>Login</h1>
                    <p>Enter your email address and password to log in to your account</p>

                    <form action="">
                        <label htmlFor="email">Email</label>
                        <input type="email" />
                        <label htmlFor="email">Password</label>
                        <input type="password" />
                        <button>Login</button>
                    </form>
                    <span>Dont have account? <span onClick={openRegister}>Register</span> </span>
                </div>
            )}
            {registerOpen && (
                <div className="bottom">
                    <h1>Register</h1>
                    <p>Fill in the form below to complete your reistrations</p>

                    <form action="">
                        <label htmlFor="email">Email</label>
                        <input id='email' type="email" />
                        <label htmlFor="firstname">First Name</label>
                        <input id='firstname' type="email" />
                        <label htmlFor="lastname">Last Name</label>
                        <input id='lastname' type="email" />
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" />
                        <button>Register</button>
                    </form>
                    <span>Already have an account? <span onClick={openLogin}>Login</span> </span>
                </div>
            )}
        </div>
    </div>
  )
}

export default Login