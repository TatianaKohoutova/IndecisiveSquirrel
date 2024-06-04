export const AboutUs = () => {
  return (
    <div class="main">
      <div class="header">
        <a href="../index.html">
          {' '}
          <div class="logo"></div>{' '}
        </a>
        <div class="menu">
          <div class="menu_item">
            <div class="nut"></div>
            <a class="menu_HomePage" href="../index.html">
              Domů
            </a>
          </div>
          <div class="menu_item">
            <div class="nut"></div>
            <a class="menu_aboutGame" href=".././pages/AboutGame">
              O hře
            </a>
          </div>
          <div class="menu_item">
            <div class="nut"></div>
            <a class="menu_aboutUs" href="./pages/AboutUs">
              O nás
            </a>
          </div>
        </div>
        <div class="hamburger-menu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="nadpis">
        <h1>Nerozhodná veverka</h1>
      </div>
      <div class="text">
        <div class="main_content">
          <h3>O nás</h3>
          <p>
            Jsme tři poblázněné super holky jménem Bára, Táňa a Jana. I přesto,
            že naše cesty byly rozdílné, přivedly nás ke společné zálibě –
            programování. Nyní spolu tvoříme úžasný projekt, do kterého jsme se
            zamilovaly. Přesvědčte se, jak je skvělý.
          </p>
        </div>
        <div class="photo">
          <img
            src="../img/SquirrelOnTree.png"
            alt="Lezoucí veverka"
            class="img_onTheTree"
          />
        </div>
      </div>
      <div class="footer bottom-line">
        <p></p>
      </div>
    </div>
  );
};
