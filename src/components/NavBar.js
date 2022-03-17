import React from 'react';
import { FaArrowLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark primary-bg">
      <div className="container-fluid">

        <div>
          <NavLink className="me-2 text-white" to="/"><FaArrowLeft /></NavLink>
          <strong className="text-white">2022</strong>
        </div>

        <div>
          <span className="text-white">Category</span>
        </div>

        <div className="d-flex">
          <NavLink className="text-white me-3" to="#">
            <FaMicrophone />
          </NavLink>

          <NavLink className="text-white" to="#">
            <FaCog />
          </NavLink>
        </div>

      </div>
    </nav>
  </>
);

export default NavBar;
