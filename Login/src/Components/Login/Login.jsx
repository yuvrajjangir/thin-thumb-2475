import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Style from "./Login.module.css";
import logo from '../../Images/Credit_Karma_2007.png'
import { auth, provider } from '../../firebase';
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../../Redux/auth/action";

export const Login = () => {
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [google, setGoogle] = useState('');
    const [isError,setIserror] =useState("");
    const [submitbutton,setSubmitButton] =useState(false); 

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const isAuth = useSelector(state=>state);
    console.log(isAuth);

    const handleSubmit = () => {
        if(!values.email||!values.pass){
            setIserror("Please Fill All Fields");
            return
          }

          setIserror("");
          setSubmitButton(true);
          signInWithEmailAndPassword(auth,values.email,values.pass)
          .then(async(res) => {
            setSubmitButton(false);
            alert("Login successful");
            navigate("/");
            })
            .catch((err) => {
            setSubmitButton(false);
            setIserror(err.message);
        });
    };

    const handleSignup = () =>{
      navigate('/signup')
    }
    const handleLogoClick = () => {
      // Use the navigate function to redirect to the home page ("/")
      navigate("/");
    };

    const handleGoogle = () => {
      signInWithPopup(auth, provider).then((data) => {
        navigate('/');
        setGoogle(data.user.email);
        localStorage.setItem("email", data.user.email);
        dispatch(setUserLogin(data.user));
        alert("Login successful");

      }).catch((err) => {
        console.log(err);
      })
    }

    useEffect(() => {
      setGoogle(localStorage.getItem('email'));
    }, [])
  

  return (
    <div className={Style.container}>
      <p className={Style.logo2} onClick={handleLogoClick}>ck</p>
      <div className={Style.inner}>
      <div className={Style.sibl}>
      <div> 
    <p className={Style.logo}>ck</p>
    <p className={Style.line} >"Unlock your financial potential with Credit Karma"</p>
      <h1 className={Style.welcome} >Welcome Back</h1>
      </div>
        <div>
        <input className={Style.input} type="email" placeholder="Enter Your Email"  onChange={(e)=>setValues((prev)=>({...prev,email: e.target.value}))} />
        </div>
      <br/>
        <div>
          <input className={Style.input} type="password" placeholder="Enter Your Password"  onChange={(e)=>setValues((prev)=>({...prev,pass: e.target.value}))} />
        </div>
        <div>
        <p className={Style.dont2}>{isError}</p>
        </div>
        <button className={Style.btn} onClick={handleSubmit} disabled={submitbutton}>Login</button>
        <p className={Style.underline}>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ or ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</p>
        <div className={Style.appLogo} >
          <img className={Style.images1} onClick={handleGoogle} src="https://slackmojis.com/emojis/195-google/download"  />
          <img className={Style.images2}  src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-logo-3.png" />
          <img className={Style.images3}  src="https://twemoji.twitter.com/content/dam/twemoji-twitter/Twitter_Social_Icon_Circle_Color.png.twimg.1920.png"  />
        </div>
        <p className={Style.dont} >Don't have an account?</p>
        <button className={Style.btn} onClick={handleSignup} >Sign up</button>
        <p className={Style.dont} >Create an account to join us!</p>
        </div>
      </div>
    </div>
  );
};