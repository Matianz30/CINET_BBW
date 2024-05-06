import React, {useState} from 'react'
import App from './App.jsx'
import Games from './Games.jsx'
import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PointShop from "./point-shop.jsx";
import Profile from "./Profile.jsx";

export default function Main() {
    const [points, setPoints] = useState(2000)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/games" element={<Games />}></Route>
                <Route path="/point-shop" element={<PointShop points={points} setPoints={setPoints}/>}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
