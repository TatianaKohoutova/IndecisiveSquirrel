import './about.css';
export const AboutUs = () => {
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
            <a className="menu_aboutGame" href="/game">
              O hře
            </a>
          </div>
          <div className="menu_item">
            <div className="nut"></div>
            <a className="menu_aboutUs" href="/about">
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
      <div className="nadpis">
        <h1>Nerozhodná veverka</h1>
      </div>
      <div className="text">
        <div className="main_content">
          <h3>O nás</h3>
          <p>
            Jsme tři poblázněné super holky jménem Bára, Táňa a Jana. I přesto,
            že naše cesty byly rozdílné, přivedly nás ke společné zálibě –
            programování. Nyní spolu tvoříme úžasný projekt, do kterého jsme se
            zamilovaly. Přesvědčte se, jak je skvělý.
          </p>
        </div>
        <div className="photo">
          <img
            src="../img/SquirrelOnTree.png"
            alt="Lezoucí veverka"
            className="img_onTheTree"
          />
        </div>
      </div>
      <br />
      <div className="details_aboutUs">
        <div className="us">
          <div className="bara">
            <div className="header_us">
              <img className="logo" src="../img/bara.jpg" alt="Bára" />
              <h3 className="header_bara">
                Barbora
                <br />
                Tesařová
              </h3>
            </div>
            <p className="about_bara">
              Jsem mamka a vášnivá kuchařka. Tyhle dvě věci jdou skvěle
              dohromady. Několikaletá odmlka v práci rozhodila to, kdo vlastně
              jsem a tak se snažím svoje já zase najít. Přiznám se, že je to
              celkém zábavné hledání. Mé já začíná získávat podobu a tento
              projekt je toho důkazem.
            </p>
          </div>
          <div className="tana">
            <div className="header_us">
              <img className="logo" src="../img/tana.JPG" alt="Táňa" />
              <h3 className="header_tana">
                Tátiana
                <br />
                Kohoutová
              </h3>
            </div>
            <p className="about_tana">
              Jsem bývalá veterinářka, která se rozhodla ke změně a dostala se k
              project managementu digitálních nástrojů a webovek pro veterináře.
              Svět web developtmentu a programování mě obrovský zaujal a další
              bádání v této oblasti vedlo ke vzniku i této stránky.
            </p>
          </div>
          <div className="jana">
            <div className="header_us">
              <img className="logo" src="../img/jana.JPG" alt="Jana" />
              <h3 className="header_jana">
                Jana
                <br />
                Jarošová
              </h3>
            </div>
            <p className="about_jana">
              Původní profesí jsem výtvarnice, hlavně ilustrátorka a autorka
              komiksů. Postupně jsem se během let ale dostala spíše k organizaci
              kulturních akcí, roky jsem pracovala na pozicích kurátorky,
              produkční a dramaturgyně. Teď jsem ale našla novou vášeň v
              programování.
            </p>
          </div>
        </div>
      </div>
      <div className="footer bottom-line">
        <p></p>
      </div>
    </div>
  );
};
