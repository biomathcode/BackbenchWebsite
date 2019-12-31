import React from 'react'
import Game from '../images/game-controller.svg'
import mobile from '../images/mobile-app.svg'
import video from '../images/video-camera.svg'
import { Container } from 'react-bootstrap'
//TODO: Make the them in card format 
//add the card and card 
//change the images from jpeg to png
const Home = () => {
    return(
<div role="main">
  <Container>
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3">We make games, apps and videos. </h1>
    </div>
  </div>

  <div className="container">
    <div className="row justify-content-around">
      <div className="col-md-4 card">
        <img src= {Game}  alt="game-controller-emoji"/>
        <h2 >Games</h2>
        <p>Download our latest mobile games and play with family and friends.</p>
        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-md-4 card">
        <img src= {mobile}  alt="mobile-emoji"/>
        <h2>Mobile</h2>
        <p>Download our latest mobile games and play with family and friends.</p>
        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-md-4 card ">
        <img src= {video}  alt="video-emoji"/>
        <h2>Videos</h2>
        <p>Download our latest mobile games and play with family and friends.</p>
        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    </div>
</div>

  </Container>



  
</div>
    )

}

export default Home;