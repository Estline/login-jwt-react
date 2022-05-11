import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();

    const Login = async (e) => {

        e.preventDefault();
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        axios.post('http://localhost:5000/login', { username, password }).then(response => {
            const { Token } = response.data

            if (Token) {
                console.log(Token)
                localStorage.setItem('Token', Token)
                navigate('/home')
            } else {
                console.log('ไม่พบข้อมูล')
            }
        })
    }


    useEffect(() => {
        localStorage.clear()
    }, [])




    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={Login}>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <input type="submit" value="Login" />
            </form>

        </div>
    )
}

export default Login