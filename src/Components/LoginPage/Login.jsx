import { createContext, useState } from "react";
import "./Login.css";
import {auth} from "../../Firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Authentication
  const Signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      if(userCredentials)
      navigate("/")
    })
    .catch((error)=> alert(error.message));
  };

  const register = (e) =>{
    e.preventDefault();
     createUserWithEmailAndPassword(auth, email, password)
       .then((userCredentials) => {
         if (userCredentials) 
         navigate("/");
       })
       .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
       });
       
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="sign__btn" type="button" onClick={Signin}>
            Sign In
          </button>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button onClick={register} className="create__btn" type="button">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
