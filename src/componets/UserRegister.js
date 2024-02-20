import axios from 'axios';
import React, { useState } from 'react';

function UserRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your user registration logic here
    axios.post("http://localhost:3000/users/register", { username, email, password }).then((res) => {
      console.log(res)
      alert(`User ${username} registered successfully!`)
      window.location.href = '/'

    }).catch((error) => {
      console.log(error)
      alert(error);
    })


  };

  return (
    <div className='text-center'> <main className="form-signin w-25 m-auto">
      <form className='mt-5' onSubmit={handleSubmit}>

        <h1 className="h3 mb-3 fw-normal">User Sign Up</h1>


        <div className="form-floating mb-4">
          <input type="text" className="form-control" id="floatingInput" placeholder="'George'" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label for="floatingInput">Username</label>
        </div>

        <div className="form-floating mb-4">
          <input type="email" className="form-control" id="floatingInput" placeholder="user@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
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
        <button className="w-100 btn btn-lg btn-success mb-2" type="submit">Sign Up</button>
        <p style={{ display: "inline" }}>Already have account? </p><a href="/">Sign In</a>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </main>
    </div>
  );
}

export default UserRegister;
