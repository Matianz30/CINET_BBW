
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./colors.scss"
import {Container} from "react-bootstrap";


//drip
function Games({points, setPoints}) {

        const handlePoints = (event) => {
            setPoints(points + 300)
        }

    return (
        <>
             <section className="p-5">
              <div className="container text-center">
                  <h2 className="text-center">Favorite Games</h2>
                  <h2 className="text-center">Points: {points}</h2>
                  <p className="lead text-center text-white mb-5"></p>
                  <div className="row g-3 d-flex justify-content-center">
                    
                    <div className="col-md-6 col-lg-3 m-4">
                            <div className="card">
                              <img src="/temple-run.png" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">Templerun 3</h3>
                                  <a className="btn btn-primary" onClick={handlePoints}>Play for 300 Points</a>
                                </div>
                            </div>
                      </div>

                      <div className="col-md-6 col-lg-3 m-4">
                            <div className="card">
                              <img src="/snake.png" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">Snake</h3>
                                  <a className="btn btn-primary" onClick={handlePoints}>Play for 300 Points</a>
                                </div>
                            </div>
                      </div>


                      <div className="col-md-6 col-lg-3 m-4">
                            <div className="card">
                              <img src="/flappybird.jpg" className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">Flappy Bird</h3>
                                  <a className="btn btn-primary" onClick={handlePoints}>Play for 300 Points</a>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>
          </section>

        </>
    )
}

export default Games
