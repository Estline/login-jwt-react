import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Auth from './Auth';

import Login from '../page/Login'
import Home from '../page/Home'



function AppRoutes() {
    // const navigate = useNavigate();
    return (
        <BrowserRouter>
            <Auth>
                <Routes>
                    <Route path="/" element={<Retohome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Auth>
        </BrowserRouter>

    )
}


function Retohome() {
    const navigate = useNavigate();


    useEffect(() => {
        navigate('/home')
    }
        , [])

    return (<></>)
}

export default AppRoutes