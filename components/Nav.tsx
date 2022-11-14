import React from "react";
import Link from "next/link"
import navStyles from "../styles/Nav.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router";


const Nav = () => {
  const router = useRouter();
  const isActive = (pathname: string) => {
    return pathname === router.pathname ? " active" : "";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">MP</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Link href="/cart">
              <li className="nav-item">
                <a className={"nav-link" + isActive("/cart")} aria-current="page">
                  <i className="fa-solid fa-cart-shopping"></i> Cart</a>
              </li>
            </Link>

            <Link href="/login">
              <li className="nav-item">
                <a className={"nav-link" + isActive("/login")} aria-current="page">
                <i className="fa-solid fa-user"></i> Log In</a>
              </li>
            </Link>

            {/* <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <Link href="/about">
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
            </Link> */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User name
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;