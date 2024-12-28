import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-light p-3 mt-5">
      <p>&copy; {new Date().getFullYear()} NewsApp. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
