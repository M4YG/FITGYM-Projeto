import React from "react"
import { Link } from "react-router-dom";
import "./header.css"
import LogoFITGYM from "../../assets/LogoFITGYM.svg"

const Header = () => {
    return(
        <>
            <header className="HeaderContainer">
                <nav className="HeaderNavContainer">
                    <Link to="/"><img className="HeaderLogoNav" src={LogoFITGYM} alt=""/></Link>
                    <ul>
                        <Link to="/planos">Planos</Link>
                        <Link to="/matriculas">Matrículas</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;