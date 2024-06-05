import '/global.css';
import './game.css';
// import { Header } from '../Components/Header';
// import { Footer } from '../Components/Footer';

export const AboutGame = () => {
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
      <div className="text bubble">
        <div className="main_content">
          <img
            className="bubbleArrow"
            src="../img/Arrow.png"
            alt="Bubble arrow"
          />
          <h3>O hře</h3>
          <p className="bubble">
            Pravidla hry jsou jednoduchá. Mám pro tebe pár jednoduchých otázek,
            na základě kterých ti vyberu, na co bys dneska mohl mít chuť. Neboj
            se toho. Vyber jednu z nabízených odpovědí, která je ti nejbližší. A
            abys věděl, že se blížíš ke svému vysněnému receptu, propůjčím ti
            pár svých zásob, které uvidíš po levém kraji. Přeji ti příjemnou
            zábavu a dobrou chuť.
          </p>
          {/* <!-- <div className="tlacitka">
          <a className="onas" href="./O nás/my.html">Kdo jste?</a>
          <a className="ohre" href="./O hře/hra.html">O co jde?</a>
          </div> --> */}
          <img src="../img/Volba.png" alt="Volba" className="obrazek_volby" />
        </div>
      </div>
      <img
        src="../img/Volba.png"
        alt="Volba"
        className="obrazek_volby--bigscreen"
      />
      <div className="footer bottom-line">
        <p></p>
      </div>
    </div>
  );
};
