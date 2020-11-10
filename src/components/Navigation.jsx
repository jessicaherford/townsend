import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            KENT TOWNSEND <br />
            <span>Fine Furniture</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/bio" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/bio">
                  Bio
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/gallery" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/exhibitions" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/exhibitions">
                  Exhibitions
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
