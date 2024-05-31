import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Make Your Career</h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/progress" className="nav-link">Progress</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Courses</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Quiz</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
