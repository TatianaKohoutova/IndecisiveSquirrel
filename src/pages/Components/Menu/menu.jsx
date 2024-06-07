import { useState } from 'react';
import './menu.css';
import '/global.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <a href="./">
        <div className="logo"></div>
      </a>
      <div className={`menu ${menuOpen && 'menu_open'}`}>
        <div className="menu_item">
          <div className="nut"></div>
          <a className="menu_HomePage" href="./">
            Domů
          </a>
        </div>
        <div className="menu_item">
          <div className="nut"></div>
          <a className="menu_aboutGame" href="/game">
            O hře
          </a>
        </div>
        <div className="menu_item">
          <div className="nut"></div>
          <a className="menu_aboutUs" href="./about">
            O nás
          </a>
        </div>
      </div>
      <div className="hamburger-menu" onClick={handleClick}>
        <div
          className={`line ${menuOpen && 'line_open'}`}
          onClick={handleClick}
        ></div>
        <div
          className={`line ${menuOpen && 'line_open'}`}
          onClick={handleClick}
        ></div>
        <div
          className={`line ${menuOpen && 'line_open'}`}
          onClick={handleClick}
        ></div>
        <div
          className={`line ${menuOpen && 'line_open'}`}
          onClick={handleClick}
        ></div>
      </div>
    </div>
  );
};
