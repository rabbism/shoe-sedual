import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid container">
    <Link class="navbar-brand" to="/home">Show</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li> 
      </ul>
     
    </div>
  </div>
</nav>
    );
};

export default NavBar;