import React, { Component } from 'react';
import "../Card.css"
import Pratik from '../images/Pratik.jpg'
import Chetan from '../images/Chetan.jpg'
class CardHeader extends Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
      </header>
    )
  }
}

class Button extends Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        <h5>{this.props.title}</h5>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button />
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <div>
      <div className="card">
        <CardHeader image={Chetan}/>
        <CardBody title={'Chetan Sharma'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
      </div>
      <div className="card">
        <CardHeader image={Pratik}/>
        <CardBody title={'Pratik Sharma'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
      
      </div>
        

      </div>
      
    )
  }
}
export default Card;