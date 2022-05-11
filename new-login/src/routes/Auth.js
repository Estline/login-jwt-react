import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

function Auth({ children }) {
    const navigate = useNavigate();

    const [User, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const Token = localStorage.getItem('Token');
        axios.post('http://localhost:5000/ck_login', { Token }).then(response => {
            console.log(response.data.login);
            if (response.data.login == false) {
                navigate('/login')
            }
            setUser(response.data);
            // navigate('/home')
            setLoading(false);

            // console.log(response.data)
        })
    }, [])

    if (loading) {

        return (
            <>
                <h1>loading...</h1>
            </>
        )


    }


    return (
        <AuthContext.Provider value={User}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth