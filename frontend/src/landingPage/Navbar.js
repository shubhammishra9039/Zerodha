import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div class="container ">
          <Link class="navbar-brand" to="/">
            <img src="imdia\Image\logo.svg" style={{ width: "25%" }} />
          </Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item ms-4 ">
                <Link class="nav-link active" to="/Signup">
                  Singup
                </Link>
              </li>
              <li class="nav-item ms-4 ">
                <Link class="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item ms-4 ">
                <Link class="nav-link " to="/Product">
                  Product
                </Link>
              </li>
              <li class="nav-item ms-4 ">
                <Link class="nav-link " to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item ms-4 ">
                <Link class="nav-link " to="/Support">
                  Support
                </Link>
              </li>
            </ul>
            <form class="d-flex ms-4" role="search">
              <i class="fa-solid fa-bars"></i>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
