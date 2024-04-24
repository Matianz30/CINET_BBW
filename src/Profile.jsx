import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./colors.scss"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"

function profile() {

    return (
        <>
            <Header/>
            <h1>profile</h1>
            <Footer/>
        </>
    )
}

export default profile
