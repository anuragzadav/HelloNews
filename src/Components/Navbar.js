import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation(); // Get current route path

  const getLinkStyle = (path) => ({
    color:
      location.pathname === path
        ? theme === "light"
          ? "black"
          : "white"
        : theme === "light"
        ? "white"
        : "black",
    backgroundColor:
      location.pathname === path
        ? theme === "light"
          ? "white"
          : "#291320"
        : "transparent",
    padding: "5px 10px",
    borderRadius: "10px",
    fontWeight: location.pathname === path ? "bold" : "normal",
  });
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg p-2"
        style={{
          backgroundColor: theme === "light" ? "#3C3744" : "#FEFBF4",
          color: theme === "light" ? "white" : "black",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: theme === "light" ? "white" : "black" }}
          >
            HelloNews
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  style={getLinkStyle("/")}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/health"
                  style={getLinkStyle("/health")}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/science"
                  style={getLinkStyle("/science")}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/sports"
                  style={getLinkStyle("/sports")}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/technology"
                  style={getLinkStyle("/technology")}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
            style={{ color: theme === "light" ? "white" : "black" }}
          >
            {theme === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
