import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./colors.scss"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import {Col, Row} from "react-bootstrap";

//drip
function pointshop({points, setPoints,loggedIn}) {

    const handlePoints = (event) => {
        if (points <= 300) {
            setPoints(points)
        } else {
            setPoints(points - 300)
            handlePoints()
        }
    }
    return (
        <>
<div class="hero">
    <div class="hero-content">
        <h1>Willkommen in unserem Point-Shop!</h1>
        <p>Sammeln Sie Punkte und lösen Sie sie gegen exklusive Kinoprämien ein.</p>
    </div>
</div>



<section>        
            <div className="text-center mt-3">
                <h1>Your Points</h1>
                <h2 className="mt-2 mb-5">{points}</h2>
                <div className="row m-4">
                    <div className="m-4 col-sm Point">
                        <Col>
                            <Row className={"d-flex justify-content-center"}>
                        <img src="popcorn2.jpg" alt="" className="w-75 img-fluid"/>
                            </Row>
                            <Row>
                        <button type="button" className="btn btn-primary img-fluid"
                                onClick={handlePoints}>300 Points
                        </button>
                            </Row>
                        </Col>
                    </div>
                    <div className="m-4 col-sm Point">
                        <Col>
                            <Row className={"d-flex justify-content-center"}>
                                <img src="cola.jpg" alt="" className="w-75"/>
                            </Row>
                            <Row>
                                <button type="button" className="btn btn-primary"
                                        onClick={handlePoints}>300 Points
                                </button>
                            </Row>
                        </Col>
                    </div>
                    <div className="m-4 col-sm Point">
                        <Col>
                            <Row className={"d-flex justify-content-center"}>
                                <img src="ticket.png" alt="" className="w-75"/>
                            </Row>
                            <Row>
                                <button type="button" className="btn btn-primary"
                                        onClick={handlePoints}>300 Points
                                </button>
                            </Row>
                        </Col>
                    </div>
                </div>
            </div>
</section>            

        </>
    )
}

export default pointshop
