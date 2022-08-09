import React from 'react';
import "../style/LoginRegister.css";

const LoginRegister = () => {
    return (
        <div className='loginRegister__container'>
            <button className="login_btn">Login</button>
            <button className="register_btn">Register</button>
        </div>
    );
}

export default LoginRegister;
