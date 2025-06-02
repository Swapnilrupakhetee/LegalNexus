// Navbar.tsx
import React, { useState } from 'react';
import '../styles/Navbar.css'; 
import bell from '../assets/bell.png';
import search from '../assets/search.png';
import usFlag from '../assets/us.png';
import logo from '../assets/logo.png';
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Side: Logo and Navigation */}
      <div className="navbar__left">
        {/* Logo */}
        <div className="navbar__logo">
          <img src={logo} alt="ICMS Logo" className="navbar__logo-icon" />
          <span className="navbar__logo-text">ICMS</span>
        </div>

        {/* Navigation Links */}
        <div className="navbar__nav">
          <a href="#dashboard" className="navbar__link navbar__link--active">
            Dashboard
          </a>
          <a href="#case-management" className="navbar__link">
            Case Management
          </a>
          <a href="#consultations" className="navbar__link">
            Consultations
          </a>
          <a href="#legal-aid" className="navbar__link">
            Legal Aid
          </a>
          <a href="#reports" className="navbar__link">
            Reports
          </a>
        </div>
      </div>

      {/* Right Side: Actions */}
      <div className="navbar__right">
        {/* Mobile Menu Button */}
        <button 
          className="navbar__mobile-menu" 
          type="button"
          onClick={toggleMobileMenu}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Actions */}
        <div className="navbar__actions">
          {/* Search Button */}
          <button className="navbar__button navbar__button--search" type="button">
            <img src={search} alt="Search" className="navbar__button-icon" />
          </button>

          {/* Notification Button with Badge */}
          <button className="navbar__button navbar__button--notification" type="button">
            <img src={bell} alt="Notifications" className="navbar__button-icon" />
         
          </button>

          {/* Language Selector */}
          <div className="navbar__language">
            <img src={usFlag} alt="US Flag" className="navbar__language-flag" />
            <span className="navbar__language-code">ENG</span>
            <svg className="navbar__language-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>

          {/* Profile Dropdown */}
          <div className="navbar__profile">
            <button
              onClick={toggleDropdown}
              className="navbar__profile-button"
              type="button"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
                alt="Admin Panel"
                className="navbar__profile-avatar"
              />
              <span className="navbar__profile-name">Admin Panel</span>
              <svg className="navbar__profile-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="navbar__dropdown">
                <button className="navbar__dropdown-item" type="button">
                  <div className="navbar__dropdown-icon">
                    <IoSettingsOutline />
                  </div>
                  <span className="navbar__dropdown-text">Setting</span>
                </button>
                <button className="navbar__dropdown-item" type="button">
                  <div className="navbar__dropdown-icon" >
                   <MdLogout/>
                  </div>
                  <span className="navbar__dropdown-text">Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="navbar__mobile-nav">
          <a href="#dashboard" className="navbar__mobile-link navbar__mobile-link--active">
            Dashboard
          </a>
          <a href="#case-management" className="navbar__mobile-link">
            Case Management
          </a>
          <a href="#consultations" className="navbar__mobile-link">
            Consultations
          </a>
          <a href="#legal-aid" className="navbar__mobile-link">
            Legal Aid
          </a>
          <a href="#reports" className="navbar__mobile-link">
            Reports
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



