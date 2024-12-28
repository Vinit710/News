import React from 'react';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <a className="navbar-brand" href="/">📰 NewsApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/categories">Categories</a></li>
          <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
