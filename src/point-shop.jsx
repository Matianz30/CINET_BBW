import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./colors.scss"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"

function pointshop({points, setPoints}) {
    return (
        <>
            <Header/>
            <h1>Point shop</h1>
            <h2>points: {points}</h2>

            <button type="button" className="btn btn-primary"
                    onClick={event => setPoints(points - 300)}>Product cost: 300</button>
            <Footer/>
        </>
    )
}

export default pointshop
