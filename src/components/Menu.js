import React from 'react';
import {
    Link
  } from 'react-router-dom'

function Menu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/'class="navbar-brand">Personal Budget</Link>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to ="/" class="nav-link">Homepage</Link>
                </li>
                <li class="nav-item active">
                    <Link to ="/login" class="nav-link">Login</Link>
                </li>
                <li class="nav-item active">
                    <Link to ="/logout" class="nav-link">Logout</Link>
                </li>
                <li class="nav-item active">
                    <Link to ="/signup" class="nav-link">Signup</Link>
                </li>
                <li class="nav-item active">
                    <Link to ="/dashboard" class="nav-link">Dashboard</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Menu;