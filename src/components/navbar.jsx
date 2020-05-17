import React, { Component } from "react";

// Stateless functional component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.tatalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
