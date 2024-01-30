import React from 'react';
import spectre from './logo/spectre.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <div className="header-content">
      <img src={spectre} alt="Spectre Logo" className="logo_h" />
        <div className="text-container">
          <h1 className="app-title">Hey</h1>
          <p className="app-description">It's Emon, currently pursuing my undergraduate degree in the Department of Computer Science and Engineering at the University of Dhaka. I will add all kinds of academic and programming-related stuff here. For any kind of information related to academic or programming, feel free to reach out here<a className="header-link2" href="mailto:schrodingersrats@gmail.com"> schrodingersrats@gmail.com</a></p>
        </div>
      </div>
      <div className="links-container">
        <a href="https://ignite312.github.io/a-bit-of-CP" target='blank' className="header-link">Competitive Programming Stuff</a>
        <a href="#contact" className="header-link">Contact Me </a>
      </div>
    </header>
  );
};

export default Header;