import './game.css';

export const AboutGame = () => {
  return (
    <div>
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
      <div className="footer bottom-line"></div>
    </div>
  );
};
