import './main.css'
import { Header } from '../Components/Menu/menu'
import { Link } from 'react-router-dom'
import React from 'react'

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
                            <Link className="button_aboutUs" to="./about">
                                Kdo jsme?
                            </Link>
                            <Link className="button_aboutGame" to="./game">
                                Hrát hru
                            </Link>
                        </div>
                    </div>
                </div>
                <img src="../img/Volba.png" alt="Volba" className="img_cornerSquirrel--bigscreen" />
            </div>
        </>
    )
}
