// simple admin login ui with username and password 

// if the user enters correct credentials, it will redirect to dashboard page. otherwise, show error message.

import React from 'react';
import { useState } from "react";
import axios from 'axios'


function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        // send a post request to server with username and password
        // if successful, redirect to DashBoard
        // else, display an error message
        axios.post('http://localhost:3000/admin/login', { username: username, password: password })
            .then(() => {
                window.localStorage.setItem("user", "admin")

                window.location.href = '/admin-home';
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage("Invalid username or password");
                alert(errorMessage);
            });
    };

    return (
        <>
          
            <div className='text-center'> <main className="form-signin w-25 m-auto">
                <form className='mt-5' onSubmit={handleSubmit}>

                    <h1 className="h3 mb-3 fw-normal">Admin</h1>

                    <div className="form-floating mb-4">
                        <input type="text" className="form-control" id="floatingInput" placeholder="user" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <label for="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
            </div>

        </>

    );
};

export default AdminLogin;


  {/* <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1>Admin Login</h1>

                    {errorMessage &&
                        <p>{errorMessage}</p>
                    }

                   
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required
                        value={username} onChange={(e) => setUsername(e.target.value)} />

                    
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required
                        value={password} onChange={(e) => setPassword(e.target.value)} />

                  
                    <button type="submit">Login</button>
                </div>
            </form> */}