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

export default function Main() {
    const [points, setPoints] = useState(2000)
    const [name, setName] = useState('');
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/games" element={<Games />}></Route>
                <Route path="/point-shop" element={<PointShop points={points} setPoints={setPoints}/>}></Route>
                <Route path="/profile" element={<Profile name={name}/>}></Route>
            </Routes>
            <Footer name={name} setName={setName}/>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
