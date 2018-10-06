import React from 'react';
import './footer.css';

const Footer = () => (
    <footer className="footer">
        Copyright &copy; {new Date().getFullYear()}
    </footer>
);

export default Footer;