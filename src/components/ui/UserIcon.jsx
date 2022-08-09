import React from 'react';
import "../style/UserIcon.css";

const UserIcon = ({user, logout}) => {
    return (
        <div className="userIcon__container">
            <button className='userIcon__button' onClick={logout}>{user.email[0].toUpperCase()}</button>
        </div>
    );
}

export default UserIcon;
