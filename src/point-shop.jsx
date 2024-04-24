import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./colors.scss"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"

function pointshop() {

    return (
        <>
            <Header/>
            <h1>Point shop</h1>
            <Footer/>
        </>
    )
}

export default pointshop
