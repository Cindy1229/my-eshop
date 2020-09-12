import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase.js";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.ibb.co/Zc05QkS/mylogo.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign Up/In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign in
          </button>
        </form>
        <p>
          By signing in, you agree to Cindy's E-shop's Conditions of Use & Sale.
          Please See our Privacy Notice, out Cookie Notice and our Interest
          Based Ads Notice
        </p>
        <button className="login__registerButton" onClick={register}>
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Login;
