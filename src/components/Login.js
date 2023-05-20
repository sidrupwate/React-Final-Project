import React, { useState } from "react";
import "../styles/Styles.css";
import { Button, TextField } from '@mui/material';
import axios from "axios";

const Login = ({ token, setToken }) => {
    const [UserName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        setError("");
        setPassword("");
        setUsername("");

        axios({
            url: "https://fakestoreapi.com/auth/login",
            method: "POST",
            data: {
                username: UserName,
                password: password,
            },
        }).then(res => {
            console.log(res.data.token);
            setToken(res.data.token);
            localStorage.setItem("userToken", res.data.token);
        }).catch((err) => {
            console.log(err.response.data);
            setError(err.response.data)
        });
    };
    return (
        <form className="login" >
            <div className="form">
                <img style={{height:"60px", width:"60px"}} src="https://www.pinclipart.com/picdir/big/146-1467423_clothes-shopping-clip-art.png" />
                <h1 style={{fontWeight:"700"}}>Welcome!</h1>
                <h5 style={{fontWeight:"500"}}>Sign In to continue</h5>
                <TextField className="input" id="outlined-basic" label="Username" variant="outlined" value={UserName} type="email" onChange={(e) => setUsername(e.target.value)} />
                <TextField className="input" id="outlined-basic" label="Password" variant="outlined" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                {error && <small style={{ color: "red" }}>{error}</small>}
                <Button variant="contained" className="login-btn" style={{ color: "white", backgroundColor: "black" }} onClick={handleLogin}>Sign In</Button>
            </div>
        </form>
    )
}

export default Login; 