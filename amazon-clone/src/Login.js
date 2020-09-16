import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //loged in redirect
        history.push("/");

        console.log(auth);
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created user and logged in redirect
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  console.log("email", email);
  console.log("password", password);
  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG13.png'
          alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='text'
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type='password'
          />
          <button onClick={login} type='submit' className='login__signInButton'>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditions of Use and Sale. Please
          see our privacy Notice , our Cookies Notice and our interest-Based Ads
          Notice
        </p>
        <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
