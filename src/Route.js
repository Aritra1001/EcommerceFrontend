import React from "react";
import Home from './NavPages/Home';
import Store from './NavPages/Store';
import Ipad from './NavPages/Ipad';
import Iphone from './NavPages/Iphone';
import Macbook from './NavPages/Macbook';
import Accessories from './NavPages/Accessories';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./NavPages/About";
import Contact from "./NavPages/Contact";
import Privacy from "./NavPages/Privacy";
import Page from "./NavPages/Page";
import Signup from "./NavPages/Auth/Signup";
import Login from "./NavPages/Auth/Login";

function RouterCompo(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/store' element={<Store/>}/>
                    <Route path="/ipad" element={<Ipad/>}/>
                    <Route path="/iphone" element={<Iphone/>}/>
                    <Route path="/macbook" element={<Macbook/>}/>
                    <Route path= '/accessories' element={<Accessories/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/privacypolicy" element={<Privacy/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<Page/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterCompo;