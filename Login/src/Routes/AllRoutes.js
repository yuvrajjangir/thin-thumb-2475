import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Signup } from "../Components/Signup/Signup";
import { Login } from "../Components/Login/Login"
import { auth } from "../firebase";


import Footer from "../Components/footer/footer";
import Content from "../layout/Content/Content";
export const AllRoutes = () => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                setUserName(user.displayName);
            } else setUserName("");
        });
    }, [])
    
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/" element={<Content/>}/>
            </Routes>
        </div>
    )
}