import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (

    <nav className="navbar navbar-expand-xxl navbar-light bg-success" aria-label="Seventh navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">ERE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleXxl">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/admin'>Admin</a>
            </li>

          </ul>
          <form role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
