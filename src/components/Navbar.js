import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">manav patel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Temple sechdule</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Activites</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Daily Updates</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Vaishnava Calendar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Festivals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Media</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Blogs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Donate</a>
          </li>
         
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    
 )
}
