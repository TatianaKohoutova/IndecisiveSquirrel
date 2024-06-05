import './menu.css';
import '/global.css';

export const Header = () => {
  return (
    <div className="header">
      <a href="./">
        {' '}
        <div className="logo"></div>{' '}
      </a>
      <div className="menu">
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
      <div className="hamburger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
