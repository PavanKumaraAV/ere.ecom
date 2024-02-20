import axios from 'axios';
import React, { useState } from 'react';


function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your user login logic here
    axios.post("http://localhost:3000/users/login", { email, password }).then((res) => {
      console.log(res.status)
      console.log(res.data.user._id)

      if (res.status == 200) {
        window.localStorage.setItem("user", "customer")
        window.localStorage.setItem("userId", res.data.user._id )
        window.location.href = '/all-products'
        alert(`Logged in successfully!`)
      }

    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <>
      <div className='text-center'> <main className="form-signin w-25 m-auto">
        <form className='mt-5' onSubmit={handleSubmit}>

          <h1 className="h3 mb-3 fw-normal">User Login</h1>

          <div className="form-floating mb-4">
            <input type="email" className="form-control" id="floatingInput" placeholder="user" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label for="floatingInput">Email</label>
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
          <button className="w-100 btn btn-lg btn-success mb-2" type="submit">Sign in</button>
          <p style={{ display: "inline" }}>don't have account? </p><a href="/user-register">Sign Up</a>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
      </div>
    </>
  );
}

export default UserLogin;
