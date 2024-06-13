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
                    Pravidla hry jsou snadná. Mám pro tebe několik jednoduchých otázek, u každé zvol z nabízených odpovědí tu, která ti bude nejbližší. Na základě toho ti vyberu, na co bys mohl mít chuť. Pokud by ti nabízený recept nevyhovoval, v menu najdeš další skvělé recepty. Přeji ti příjemnou zábavu a dobrou chuť.
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

