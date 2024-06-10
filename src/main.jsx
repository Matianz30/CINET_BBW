import React, {useState} from 'react'
import App from './App.jsx'
import Games from './Games.jsx'
import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PointShop from "./point-shop.jsx";
import Profile from "./Profile.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Maze from "../public/game/index.html";

export default function Main() {
    const [points, setPoints] = useState(2000)
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Header avatar={avatar}/>
            <div className="mt-5">
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/games" element={<Games />}></Route>
                <Route path="/games/maze" element={<Maze />}></Route>
                <Route path="/point-shop" element={<PointShop points={points} setPoints={setPoints} loggedIn={loggedIn}/>}></Route>
                <Route path="/profile" element={<Profile name={name} lastName={lastName} avatar={avatar} loggedIn={loggedIn}/>}></Route>
            </Routes>
            </div>
            <Footer name={name} setName={setName} lastName={lastName} setLastName={setLastName} avatar={avatar} setAvatar={setAvatar} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
