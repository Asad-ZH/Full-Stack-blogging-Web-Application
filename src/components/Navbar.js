import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <form className="container-fluid justify-content-start">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >
                {props.aboutText}
              </Link>
            </li>
          </ul>
        </form>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className={`form-check-label navbar-toggler text-bg-${props.mode}`}
            htmlFor="flexSwitchCheckDefault"
          >
            dark mode
          </label>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  home: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  home: "Set title here",
  aboutText: "About",
};
