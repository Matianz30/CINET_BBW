import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./colors.scss"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"

function Games() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="games-margin">
            <h1>games</h1>
            </div>
        </>
    )
}

export default Games
