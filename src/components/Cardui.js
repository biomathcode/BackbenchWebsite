import React from 'react';
import {Carousel} from 'react-bootstrap'

//Images 
import './card-style.css'
const Card = (props) =>{
    return(
        //Card
        //rounded img
        //Card title
        //subtitle
        //paragraph
        //button
        //corousel
        <div className="card promoting-card shadow">
            <div className="card-body d-flex flex-row">
            <img src={props.CardLogo} alt="Image1" className="card-logo mr-3" alt="avatar"/>
            
            <div>
                <h4 className="card-title font-weight-bold mb-2">{props.CardTitle}</h4>
                <p className="card-text">{props.CardSubtitle}</p>
            </div>
            </div> 
            <div className="view overlay text-center">
                <p className="card-text">{props.CardBody}</p>
            </div>
            <div className="text-center">
            <button href={props.GoogleStore} className="btn btn-outline-dark  rounded-pill bg-black  p-3 mt-2 mb-0">Get on Google Store</button>
            </div>
            <div className="card-img-top rounded-0">
                <Carousel fade interval={2000}>
                    <Carousel.Item>
                        <img
                          className="d-block w-100 card-img-top rounded-0"
                          src = {props.CarouselImg1}
                          alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block w-100 card-img-top rounded-0"
                          src={props.CarouselImg2}
                          alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                

            </div>   
            
            

        </div>
    )
}

export default Card;