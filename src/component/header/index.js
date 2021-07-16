import React from "react";
import { isAuthenticated } from "../../api/auth";
import {Link} from 'react-router-dom'
import './style.scss'
const Header = () => {
  return (
    <div className="Nabbar">
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
          Sam
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            {isAuthenticated() ? (
              <Link className="nav-link px-3" href="signout">
              Sign out
            </Link>
            ): (<Link className="nav-link px-3" to="/signin">
            Sign In
          </Link>) }
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
