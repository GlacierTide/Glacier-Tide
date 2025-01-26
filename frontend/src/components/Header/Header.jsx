import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css"; 
import { useAuth } from '../../AuthContext';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);
  const { userId, logout } = useAuth(); // Access userId and logout from AuthContext
  const navigate = useNavigate();

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(prevState => (prevState === dropdown ? null : dropdown));
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        handleDropdownClose();
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <header ref={headerRef}>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" style={{ width: "170px", height: "58.5px" }} />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/events">Events</Link></li> */}
          {/* <li>
            <span onClick={() => handleDropdownToggle('services')}>Services</span>
            {openDropdown === 'services' && (
              <ul className="dropdown">
                <li onClick={handleDropdownClose}>
                  <Link to="/Services/ClimateTroopers" onClick={handleDropdownClose}>Climate Trooper</Link>
                </li>
                <li onClick={handleDropdownClose}>
                  <Link to="/services/service-two" onClick={handleDropdownClose}>CSR Management</Link>
                </li>
              </ul>
            )}
          </li> */}
          {/* <li>
            <span onClick={() => handleDropdownToggle('projects')}>Projects</span>
            {openDropdown === 'projects' && (
              <ul className="dropdown">
                <li onClick={handleDropdownClose}>
                  <Link to="/Projects/Project8" onClick={handleDropdownClose}>Project 8</Link>
                </li>
                <li onClick={handleDropdownClose}>
                  <Link to="/projects/project-two" onClick={handleDropdownClose}>BBB</Link>
                </li>
              </ul>
            )}
          </li> */}
          {/* <li><Link to="/gallery">Gallery</Link></li> */}

          {userId ? (
            <li><Link to="/" onClick={handleLogout} className="in">Logout</Link></li>
          ) : (
            <>
              <li><Link to="/Signup" className="up">Sign Up</Link></li>
              <li><Link to="/Login" className="in">Sign In</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
