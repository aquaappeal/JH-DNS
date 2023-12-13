import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
   return (
      <nav>
         <Link to="/" className="title">Jobhunt</Link>

         <div className="menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </div>

         <ul>
            <li>
               <NavLink to="/men">Men</NavLink>
            </li>
            <li>
               <NavLink to="/post-a-job">Post A Job</NavLink>
            </li>
            <li>
               <NavLink to="/register">Register</NavLink>
            </li>
            <li>
               <NavLink to="/login">Login</NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
