import './main.css'
import { Link } from 'react-router-dom'
import React from 'react'

export const Main = () => (
    <>
        <div>
            <h1>Nerozhodná veverka</h1>
            <div className="text">
                <div className="main_content">
                    <p>
                        Vítáme tě na své aplikaci, která ti změní život k lepšímu a ušetří spoustu času.
                        Cítíme tvoje nadšení.
                        <br />
                        Tak pojďme na to.
                    </p>
                    <div className="buttons">
                        <Link className="button" to="./about">
                            Kdo jsme?
                        </Link>
                        <Link className="button" to="./game">
                            Hrát hru
                        </Link>
                    </div>
                </div>
            </div>
            <img src="../img/Volba.png" alt="Volba" className="img_cornerSquirrel--bigscreen" />
        </div>
    </>
)
