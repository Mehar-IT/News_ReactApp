// import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          News App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </Link>
              <ul
                className="dropdown-menu"
                style={{ maxHeight: "280px", overflowY: "auto" }}
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sport">
                    Sport
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/tech">
                    Tech
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/economics">
                    Economics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/world">
                    World
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/finance">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/politics">
                    Politics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/business">
                    Business
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/beauty">
                    Beauty
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/travel">
                    Travel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/music">
                    Music
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/food">
                    Food
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/science">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gaming">
                    Gaming
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/energy">
                    Energy
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
