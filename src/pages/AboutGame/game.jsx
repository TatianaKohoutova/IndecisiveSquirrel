import { Link } from 'react-router-dom'
import './game.css'

export const AboutGame = () => (
        <div>
            <div className="introduction">
                <h1>Nerozhodná veverka</h1>
            </div>
            <div className="text bubble">
                <div className="main_content">
                    <img className="bubbleArrow" src="../img/Arrow.png" alt="Šipka k bublině" />
                    <h3>O hře</h3>
                    <p className="bubble">
                        Pravidla hry jsou jednoduchá. Mám pro tebe pár jednoduchých otázek, na základě kterých ti
                        vyberu, na co bys dneska mohl mít chuť. Vyber jednu z nabízených odpovědí, která
                         ti bude nejbližší. A abys věděl, že se blížíš ke svému vysněnému receptu, propůjčím ti pár svých
                        zásob, které uvidíš po levém kraji. Pokud by ti mnou vybraný recept nevyhovoval, tak v menu najdeš další skvělé recepty. Přeji ti příjemnou zábavu a dobrou chuť.
                    </p>
                    <Link className=" button" to="/questionForm/0">
                        Hrát hru
                    </Link>

                    <img src="../img/Volba.png" alt="Volba" className="img_cornerSquirrel" />
                </div>
            </div>
            <img src="../img/Volba.png" alt="Volba" className="img_cornerSquirrel--bigscreen" />
        </div>
    )

