import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar bg-dark">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button">
             {props.home}
          </button>
          <button className="btn btn-outline-success me-2" type="button">
            {props.aboutText}
          </button>
        </form>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
    home: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};