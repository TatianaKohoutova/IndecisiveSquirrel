import './main.css'
import { Header } from '../Components/Menu/menu'

export const Main = () => {
    return (
        <>
            <div>
                <div className="uvod">
                    <h1>Nerozhodná veverka</h1>
                </div>
                <div className="text">
                    <div className="main_content">
                        <p>
                            Vítáme Vás na naší webové aplikaci, která Vám změní život k lepšímu a ušetří spoustu času.
                            Cítíme Vaše nadšení.
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
                    </div>
                </div>
                <img src="../img/Volba.png" alt="Volba" className="img_cornerSquirrel--bigscreen"></img>
            </div>
        </>
    )
}
