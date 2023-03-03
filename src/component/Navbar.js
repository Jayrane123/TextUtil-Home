import React from "react";
import PropTypes from "prop-types";
// import { a } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <a className="nav-a active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/about">
                  About
                </a>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
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
                    <a
                      className="dropdown-item"
                      onClick={props.violet}
                      href="/"
                    >
                      Violet
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </form>
            <div
              className={`form-check form-switch mx-1 -${
                props.Mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                // role="switch"
                id="flexSwitchCheckDefault"
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
