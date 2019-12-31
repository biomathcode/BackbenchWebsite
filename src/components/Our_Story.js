import React,{Component} from 'react'
import coding_image from '../images/coding-background.png'
import pratik from '../images/Pratik.png'
import chetan from "../images/Chetan.png"
import {MDBIcon, MDBContainer, MDBBtn} from 'mdbreact'


class Our_Story extends Component {
    /* setTimeout(() => {
        props.history.push('/about')
    }, 2000); */
    render(){
        
    return (
        <div className="main">
            <div className="coding-block">
                <img src={coding_image} alt="codingimage" style={{ "width": "100%", "height" : "100%" }}/>
                <div className='middle-right'>
                <h1>"Talk is cheap.<br></br>Show me the <br></br>code"</h1>
                <h3>Linus Torvalds</h3>
                </div>
            </div>
            <div className="jumbotron">
            <h6 className="">Backbench is a mobile game and app developer based in New Delhi , India. Since our launch in 2016 - we've brought an app and two games to the global market - Backbench Notes Sharing (App), AweStack and Kudos Jump. Our mission is to make amazing apps and games that are used by as many people as possible.
    Started in 2016 by two brothers - 
    <b>Chetan Sharma</b> and <b>Pratik Sharma</b> - 
    out of their sheer interest and curiosity in technology.
    </h6>
            </div>
    <div className="container">
                
    <div className="row justify-content-around">
          <div className="col card card-layout ">
            <div className="image-cropper ">
                <img src= {chetan} className=" img-fluid"  alt="chetan" style={{"width": "100%"}}/>
            </div>
            
            <h2 className="card-title">Chetan Sharma</h2>
            <h4> co-founder</h4>
            <ul className="social-network social-circle">
            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>

            </ul>
            
            
          </div>
          
          <div className="col card card-layout">
            <div className="image-cropper">
            <img src= {pratik}  className=" img-fluid" alt="pratik" style={{"width": "100%"}}/>  
            </div>
            <h2 className="card-title">Pratik Sharma</h2>
            <h4 > co-founder</h4>
            <ul className="social-network social-circle">
            <li><a href="" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>

            </ul>
            
            </div>
        </div>
            
    </div>    
            
    
        
    </div>
            
        )

    }
};

export default Our_Story;