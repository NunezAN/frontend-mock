import React from 'react';
import "../style/LoginRegister.css";

const LoginRegister = ({register, login}) => {
    return (
        <div className='loginRegister__container'>
            <button className="login_btn" onClick={login}>Login</button>
            <button className="register_btn" onClick={register}>Register</button>
        </div>
    );
}

export default LoginRegister;
