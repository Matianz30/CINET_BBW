import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./colors.scss"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            
        {/*Trailer*/}
        <section >
          
          <video 
                  width="100%"
                  height="auto"
                  autoPlay
                  muted
                  loop>
                  <source src="KUNG FU PANDA 4  Official Trailer.mp4" type="video/mp4"/>
          </video>
              
        </section>
        


        {/*Movies*/}
        <section className="p-5">
              <div className="container">
                  <h2 className="text-center">Movies</h2>
                  <p className="lead text-center text-white mb-5"></p>
                  <div className="row g-4">
                    
                    <div className="col-md-6 col-lg-3 movie">
                            <div className="card">
                              <img src="/Kunf Fu Panda.jpg" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">Kunf Fu Panda</h3>
                                  <a href="" className="btn btn-primary">Book now</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3 movie">
                            <div className="card">
                              <img src="/Garfield.jpg" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">Garfield</h3>
                                  <a href="" className="btn btn-primary">Book now</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3 movie">
                            <div className="card">
                              <img src="/500.jpeg" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">500 Days of ☀</h3>
                                  <a href="" className="btn btn-primary">Book now</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3 movie">
                            <div className="card">
                              <img src="/Helden.jpg" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">Die 🏝 Helden</h3>
                                  <a href="" className="btn btn-primary">Book now</a>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>
          </section>
   
        {/*MAP*/}

          <section>
          <div class="iframe-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.8898771102145!2d8.619738475010935!3d47.4140891012534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa1bc1b000f9d%3A0x2e2b4b6ebd495d96!2sPath%C3%A9%20Dietlikon!5e0!3m2!1sde!2sch!4v1718023568632!5m2!1sde!2sch" 
            width="600" height="450"  allowfullscreen="" 
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </section>

        </>
    )
}

export default App
