import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./colors.scss"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"

function profile({name}) {

    return (
        <>
            <h1>profile</h1>
            Name: {name}
        </>
    )
}

export default profile
