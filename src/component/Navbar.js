import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link className="nav-a active" aria-current="page" to="/" color="black">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a" to="/about" color="black">
                  About
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button> */}
              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle mx-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <small>Change dark mode backgroundColor</small>
                </button>
                <ul
                  className="dropdown-menu"
                  style={{ backgrondColor: "black" }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.violet}
                      to="/"
                    >
                      Violet
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
            <div
              // className={`form-check form-switch mx-1 -${
              //   props.Mode === "light" ? "dark" : "light"
              // }`}
              className="form-check form-switch mx-1"
            >
              <input
                // className={`form-check-input"-${
                className={`form-check-input form-switch"-${
                  props.Mode === "light" ? "dark" : "light"
                }`}
                onClick={props.toggleMode}
                type="checkbox"
                // role="switch"
                id="flexSwitchCheckDefault"
                // style={{ color: props.Mode === "dark" ? "white" : "black" }}
              />
              <label
                className="form-check-label mx-2"
                htmlFor="flexSwitchCheckDefault"
                style={{ color: props.Mode === "dark" ? "white" : "black" }}
              >
                {props.States}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = {
  title: "Title",
};
