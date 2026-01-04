// Nav Bar Module for the Webpage

import { Link } from "react-router-dom";

export default function NavBar({ nav_info }) {
  
  return (
    // nav Bar componenet
    <nav className={`navbar navbar-expand-lg navbar-${nav_info.mode} bg-${nav_info.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {nav_info.title}
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
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                {nav_info.about_text}
              </Link>
            </li>
          </ul>

          {/* Search Bar
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button> */}
            <div className={`form-check form-switch text-${nav_info.mode ==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={nav_info.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
            </div>
          {/* </form> */}
        </div>
      </div>
    </nav>
  );
}

