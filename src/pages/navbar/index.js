import React from "react";
import logo from "../../assets/AgroMartLogo.png";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className={styles.img} src={logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item me-3">
                  <a class="nav-link" href="#">
                    <Link to='/'>Home</Link></a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">
                  <Link to='/products'>Products</Link>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">
                  <Link to='/about'>About Us</Link>
                </a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="/cart">
                  <Link to='/cart'> <i class="fa-solid fa-cart-shopping"></i></Link>
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success  me-3" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <button class="btn btn-outline-success" type="submit">
                login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
