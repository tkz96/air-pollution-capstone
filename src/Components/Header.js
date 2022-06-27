import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';
import './Header.module.css';

export default function Header() {
  return (
    <header id="Header">
      <div className="header-logo-and-name">
        <img className="header-logo" src={logo} alt="planet logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <nav>
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/Missions">Missions</NavLink>
        <NavLink to="/MyProfile">My Profile</NavLink>
      </nav>
    </header>
  );
}
