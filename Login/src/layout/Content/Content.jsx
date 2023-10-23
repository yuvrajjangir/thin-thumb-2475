import "./Content.css";
import React, {useEffect, useState} from "react";
import ContentTop from "../../Components/ContentTop/ContentTop";
import ContentMain from '../../Components/ContentMain/ContentMain';
import Navbar from "../../Components/navbar/navbar";
import Footer from "../../Components/footer/footer";
import { auth } from "../../firebase";
const Content = () => {
  const [userName, setUserName] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                setUserName(user.displayName);
            } else setUserName("");
        });
    }, [])
  return (
    <div className='main-content'>
      {<Navbar name = {userName}/>}
      <ContentTop />
      <ContentMain />
      <Footer/>
    </div>
  )
}

export default Content
