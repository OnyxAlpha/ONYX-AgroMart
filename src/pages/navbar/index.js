import React, {useEffect, useState} from "react";
import logo from "../../assets/AgroMartLogo.png";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from 'usehooks-ts';

function Navbar() {

const [itemslist, setItemsList] = useLocalStorage("Item List", []);
const [totalItems, getItemsTotal] = useState(0)

let calculate = () =>{
  let cartValue = itemslist.map((x)=>x.item).reduce((x,y) => x+y,0)
  getItemsTotal(cartValue)
}

useEffect(() => {
  calculate()
  // setItemsList(itemslist);
}, [itemslist]);

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
                    <Link  class="nav-link link-light" to='/'>Home</Link>
              </li>
              <li class="nav-item me-3">

                  <Link class="nav-link link-light" to='/products'>Products</Link>
              </li>
              <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle link-light" role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"> Categories</Link>
                <ul class="dropdown-menu">
                  <li>

                    <Link class="dropdown-item ">  Crops</Link>
                  </li>
                  <li>
                  <Link class="dropdown-item">  Livestock</Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                   <Link class="dropdown-item"> Seafood</Link>
                  </li>
                  <li>
                   <Link class="dropdown-item"> Processed</Link>
                  </li>
                </ul>
              </li>
             <div className={styles.iconcontainer}>
             <li class="nav-item me-3">
                  <Link class="nav-link link-light" to='/about'>About Us</Link>
              </li>
              <div className={styles.iconWrapper}>
                <p>{totalItems}</p>
            </div>
             </div>
              <li class="nav-item me-3">
                  <Link class="nav-link link-light" to='/cart'> <i class="fa-solid fa-cart-shopping"></i></Link>
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
                <Link class="btn btn-outline-success" to='/signin'>Login</Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
