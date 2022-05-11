import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const Logout = () => {
        console.log('logout')
        localStorage.clear()
        navigate('/login')
    }
    return (
        <div>
            <li>
                <ul>ชื่อ</ul>
                <ul>role</ul>
            </li>

            <button onClick={Logout}>ออกจากระบบ</button>

        </div>
    )
}

export default Home