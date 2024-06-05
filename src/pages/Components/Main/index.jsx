import '/global.css';

export const Main = () => {
  return (
    <div className="main">
      <div className="header">
        <a href="/">
          {' '}
          <div className="logo"></div>{' '}
        </a>
        <div className="menu">
          <div className="menu_item">
            <div className="nut"></div>
            <a className="menu_HomePage" href="/">
              Domů
            </a>
          </div>
          <div className="menu_item">
            <div className="nut"></div>
            <a className="menu_aboutGame" href="./game">
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
      <div className="uvod">
        <h1>Nerozhodná veverka</h1>
      </div>
      <div className="text">
        <div className="main_content">
          <p>
            Vítáme Vás na naší webové aplikaci, která Vám změní život k lepšímu
            a ušetří spoustu času. Cítíme Vaše nadšení.
            <br />
            Tak pojďme na to.
          </p>
          <div className="buttons">
            <a className="button_aboutUs" href="./about">
              Kdo jsme?
            </a>
            <a className="button_aboutGame" href="./game">
              O co jde?
            </a>
          </div>
          <img src="./img/Volba.png" alt="Volba" className="obrazek_volby" />
        </div>
      </div>
      <div className="footer bottom-line">
        <p></p>
      </div>
    </div>
  );
};
