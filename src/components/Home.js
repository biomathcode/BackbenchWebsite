import React from 'react'
import Game from '../images/game-controller.jpg'
import mobile from '../images/mobile-app.jpg'
import video from '../images/video-camera.jpg'
//TODO: Make the them in card format 
//add the card and card 
//change the images from jpeg to png
const Home = () => {
    return(
<div role="main">

  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">We make games, apps and videos. </h1>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-4 card">
        <img src= {Game}  alt="game-controller-emoji"/>
        <h2 >Games</h2>
        <p>Download our latest mobile games and play with family and friends.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div class="col-md-4 card">
        <img src= {mobile}  alt="mobile-emoji"/>
        <h2>Mobile</h2>
        <p>Download our latest mobile games and play with family and friends.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div class="col-md-4 card ">
        <img src= {video}  alt="video-emoji"/>
        <h2>Videos</h2>
        <p>Download our latest mobile games and play with family and friends.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    </div>
</div>
</div>
    )

}

export default Home;