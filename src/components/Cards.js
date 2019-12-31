import React, { Component } from 'react';

import Card from './Cardui';


//first card imports
import Cardlogo1 from '../images/Main_Icon.png'
import Image1_1 from '../images/card_1_1.png'
import Image1_2 from '../images/card_1_2.png'


//second card imports
import CardLogo2 from '../images/CardLogo2.png'
import Image2_1 from '../images/card_2_1.png'
import Image2_2 from '../images/card_2_2.png'

//third card imports
import CardLogo3 from '../images/CardLogo3.png'
import Image3_1 from '../images/card_3_1.png'
import Image3_2 from '../images/card_3_2.png'
//
class Cards extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container justify-content-center">
                <h1 className="text-center">Our Games</h1>
                <div className="row d-flex">
                        <div className="col">
                            <Card
                                CardLogo={Cardlogo1} 
                                CardTitle="AweStack"
                                CardSubtitle="Casual"
                                CardBody="A free beautiful casual stack tower game without any ads or interruptions"
                                GoogleStore=""
                                CarouselImg1={Image1_1}
                                CarouselImg2={Image1_2}/>
                        </div>
                        <div className="col">
                            <Card      
                                CardLogo={CardLogo2} 
                                CardTitle="Kudos Jump"
                                CardSubtitle="Casual"
                                CardBody="A minimalist, aesthetic and colorful game where you help a ball hop from one point to other."
                                //Todo: add the LoveEyedEmoticon
                                GoogleStore=""
                                CarouselImg1={Image2_1}
                                CarouselImg2={Image2_2}/>
                        </div>
                </div>
                <h1 className="text-center">Apps</h1>                    
                <div className="row ">
                        
                        <div className="col center">
                            <Card      
                                CardLogo={CardLogo3} 
                                CardTitle="BackBench- Notes Sharing"
                                CardSubtitle="Education"
                                CardBody="Share Notes as photos, collections or document(PDF).Follow Friends and grab theire witty notes. Share notes and help them pull those all-nighters"
                                GoogleStore=""
                                CarouselImg1={Image3_1}
                                CarouselImg2={Image3_2}/>
                        </div>

                </div>

            
            </div>
         );
    }
}
 
export default Cards;