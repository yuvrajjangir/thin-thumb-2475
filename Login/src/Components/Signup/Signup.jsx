import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Style from "../Signup/Signup.module.css"
import logo from '../../Images/Credit_Karma_2007.png'
import { auth } from '../../firebase';

export const Signup = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });
    const [isError,setIserror] =useState("");
    const [submitbutton,setSubmitButton] =useState(false); 


    const handleLogoClick = () => {
      // Use the navigate function to redirect to the home page ("/")
      navigate("/");
    };


    const handleSubmit = () => {
        if(!values.name||!values.email||!values.pass){
            setIserror("Please Fill All Fields");
            return
          }
          setIserror("");

          setSubmitButton(true);
          createUserWithEmailAndPassword(auth,values.email,values.pass)
          .then(async(res) => {
            setSubmitButton(false);
            const users = res.user;
            await updateProfile(users, {
                displayName: values.name,
            });
            navigate("/");
            })
            .catch((err) => {
            setSubmitButton(false);
            setIserror(err.message);
        });
    };
  
  return (
    <div className={Style.container}>
        <p className={Style.logo2} onClick={handleLogoClick}>ck</p>
        <div className={Style.inner}>
        <p className={Style.logo}>ck</p>
        <p className={Style.line} >"Unlock your financial potential with Credit Karma"</p>
      <div>
      </div>
        <div>
        <input className={Style.input} type="text" placeholder="Enter Your Name" onChange={(e)=>setValues((prev)=>({...prev,name: e.target.value}))}/>
        </div>  
   <br/>
        <div>
          <input className={Style.input} type="email" placeholder="Enter Your Email" onChange={(e)=>setValues((prev)=>({...prev,email: e.target.value}))} />
        </div>
        <br/>
        <div>
          <input className={Style.input} type="password" placeholder="Enter Your Password" onChange={(e)=>setValues((prev)=>({...prev, pass: e.target.value}))} />
        </div>

        <br/>
        <div>
        <p className={Style.dont}>{isError}</p>
        </div>
        <button className={Style.btn} onClick={handleSubmit} disabled={submitbutton} >Sign up</button>
        <p className={Style.pop}>Already have an account?
        <span>
          <Link className={Style.link} to='/Login'> Login</Link>
        </span>
        </p>
      </div>
    </div>
  )
}