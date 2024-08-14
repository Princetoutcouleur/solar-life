import React from "react";
import logo from "../Assets/logo.png";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="img-fluid" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item fs-4 fw-light">
              <a
                className="nav-link text-white active"
                aria-current="page"
                href="#"
              >
                Accueil
              </a>
            </li>
            <li className="nav-item fs-4 fw-light">
              <a className="nav-link text-white" href="#about">
                A propos
              </a>
            </li>
            <li className="nav-item fs-4 fw-light">
              <a className="nav-link text-white" href="#team">
                Notre équipe
              </a>
            </li>
            <li className="nav-item fs-4 fw-light">
              <a className="nav-link text-white " href="#services">
                Nos services
              </a>
            </li>
            <li className="nav-item fs-4 fw-light">
              <a className="nav-link text-white " href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
