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
                  loop
              >
                  <source src="KUNG FU PANDA 4  Official Trailer.mp4" type="video/mp4"/>
              </video>
              <div>
                  
              </div>
        </section>

        <section className="p-5">
              <div className="container">
                  <h2 className="text-center">Movies</h2>
                  <p className="lead text-center text-white mb-5"></p>
                  <div className="row g-4">
                    
                    <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Book</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Book</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Book</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="/flappybird.jpg" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Book</a>
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
                                  <a href="" className="btn btn-primary">Book</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="/snake.png" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Book</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="/snake.png" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Book</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                            <div className="card">
                              <img src="/flappybird.jpg" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="" className="btn btn-primary">Book</a>
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
