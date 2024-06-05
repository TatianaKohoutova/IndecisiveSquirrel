import '/global.css';

export const Main = () => {
  return (
    <>
      <div className="main">
        <div className="uvod">
          <h1>Nerozhodná veverka</h1>
        </div>
        <div className="text">
          <div className="main_content">
            <p>
              Vítáme Vás na naší webové aplikaci, která Vám změní život k
              lepšímu a ušetří spoustu času. Cítíme Vaše nadšení.
              <br />
              Tak pojďme na to.
            </p>
            <div className="buttons">
              <a className="button_aboutUs" href="./AboutUs/about">
                Kdo jsme?
              </a>
              <a className="button_aboutGame" href="./AboutGame/game">
                O co jde?
              </a>
            </div>
            <img src="./img/Volba.png" alt="Volba" className="obrazek_volby" />
          </div>
        </div>
      </div>
    </>
  );
};
