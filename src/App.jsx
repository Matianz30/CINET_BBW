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
            <Header/>
        {/*Trailer*/}
        <section className="hero-video">
          <video
                  className="hero-video__background"
                  width="100%"
                  height="auto"
                  autoPlay
                  muted
                  loop
              >
                  <source src="A$AP Rocky - Sundress (Official Video).mp4" type="video/mp4"/>
              </video>
              <div className="hero-video__content">
                  
              </div>
        </section>

        
        
        {/*Movies*/}
        <section>
            <div className="container" data-aos="fade-up">
                <h2 className="text-center mb-5 mt-5" id='games'>Favorite Games</h2>
                <div className="row">
                    <div className="col-sm text-center">
                        <img src="/flappybird.jpg" width="70%" className="img-fluid rounded"/>
                    </div>
                    <div className="col-sm text-center">
                        <img src="/snake.png" width="70%" className="img-fluid rounded"/>
                    </div>
                    <div className="col-sm text-center">
                        <img src="/temple-run.png" width="70%" className="img-fluid rounded"/>
                    </div>
                </div>

            </div>
        </section>


        {/*Favorite Games*/}
        <section>
            <div className="container" data-aos="fade-up">
                <h2 className="text-center mb-5 mt-5" id='games'>Favorite Games</h2>
                <div className="row">
                    <div className="col-sm text-center">
                        <img src="/flappybird.jpg" width="70%" className="img-fluid rounded"/>
                    </div>
                    <div className="col-sm text-center">
                        <img src="/snake.png" width="70%" className="img-fluid rounded"/>
                    </div>
                    <div className="col-sm text-center">
                        <img src="/temple-run.png" width="70%" className="img-fluid rounded"/>
                    </div>
                </div>

            </div>
        </section>

            <Footer/>
        </>
    )
}

export default App
