import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg  container d-flex justify-content-between">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/' class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Category</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Women</a>
        </li>
        <li class="nav-item">
          <Link to='/admin' class="nav-link" href="#">Admin</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
