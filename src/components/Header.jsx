import {useState} from 'react'
import "/src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "/src/colors.scss"
import {Link} from "react-router-dom";

function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg background-color-grey">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="logo-cinet.png" alt="Bootstrap" width="120px" height="auto"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/games"}>Games</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/point-shop"}>Point shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/profile"}>Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header
