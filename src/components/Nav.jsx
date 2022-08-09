import React from "react";
import "./style/Nav.css";
import LoginRegister from "./ui/LoginRegister";
import UserIcon from "./ui/UserIcon";
import { auth } from "../firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Nav = () => {
  const [user, setUser] = React.useState({});

  function register() {
    console.log("Registering...");
    createUserWithEmailAndPassword(auth, "anun@email.com", "temp123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function login() {
    console.log("logging in...");
    signInWithEmailAndPassword(auth, "anun@email.com", "temp123")
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function logOut() {
    console.log("logging out...");
    signOut(auth);
    setUser({});
  }
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
          {Object.keys(user).length > 0 ? (
            <UserIcon user={user} logout={logOut}></UserIcon>
          ) : (
            <LoginRegister register={register} login={login}></LoginRegister>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
