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
            <Header/>
            <h1>games</h1>
            <Footer/>
        </>
    )
}

export default Games
