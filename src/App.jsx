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
                  height="auto  "
                  autoPlay
                  muted
                  loop
              >
                  <source src="KUNG FU PANDA 4  Official Trailer.mp4" type="video/mp4"/>
          </video>
              <div class="video-content">
                <h1>Willkommen in unserem Kino</h1>
                <p>Erleben Sie die besten Filme in atemberaubender Qualität</p>
              </div>
        </section>

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
   
        {/*Favorite Games*/}

          <section className="p-5">
              <div className="container">
                  <h2 className="text-center">Favorite Games</h2>
                  <p className="lead text-center text-white mb-5"></p>
                  <div className="row g-4">
                    
                    <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="/temple-run.png" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Play</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="/snake.png" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Play</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="/snake.png" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Play</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="/flappybird.jpg" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Play</a>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>
          </section>

        </>
    )
}

export default App
