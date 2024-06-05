import './menu.css';
export const Header = () => {
  return (
    <div className="header">
      <a href="./pages/HomePage">
        {' '}
        <div className="logo"></div>{' '}
      </a>
      <div className="menu">
        <div className="menu_item">
          <div className="nut"></div>
          <a className="menu_HomePage" href="./pages/HomePage">
            Domů
          </a>
        </div>
        <div className="menu_item">
          <div className="nut"></div>
          <a className="menu_aboutGame" href="./pages/AboutGame">
            O hře
          </a>
        </div>
        <div className="menu_item">
          <div className="nut"></div>
          <a className="menu_aboutUs" href="./pages/AboutUs">
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
