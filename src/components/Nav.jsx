import React from "react";
import "./style/Nav.css";
import LoginRegister from "./ui/LoginRegister";
import UserIcon from "./ui/UserIcon";

const Nav = () => {
  const [user, setUser] = React.useState({});
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="logo__container">
          <img
            className="logo__img"
            src="https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png"
            alt=""
          />
        </div>
        <div className="nav__links">
          {user ? <LoginRegister></LoginRegister> : <UserIcon></UserIcon>}
        </div>
      </div>
    </div>
  );
};

export default Nav;
