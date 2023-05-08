import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                {/* <Link className="navbar-brand" href="#">Hidden brand</Link> */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to="/" className="nav-link" aria-current="page" href="#">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/store' className="nav-link" href="#">STORE</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/iphone' className="nav-link">IPHONE</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/ipad' className="nav-link">IPAD</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/macbook' className="nav-link">MACBOOK</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to='/accessories' className="nav-link">ACCESSORIES</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar2">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link" aria-current="page" href="#">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" aria-current="page" href="#">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link" aria-current="page" href="#">
                            <i className="fa-solid fa-cart-shopping fa-shake fa-xl"></i>
                                Cart(0)
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Header;
