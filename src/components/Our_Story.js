import React from 'react'
import Card from './Card.js'
const Our_Story = (props) => {
    /* setTimeout(() => {
        props.history.push('/about')
    }, 2000); */
    return (
        <div className="container">
            <h1 className="center">Our_Story</h1>
            <h6 className="">Backbench is a mobile game and app developer based in New Delhi , India. Since our launch in 2016 - we've brought an app and two games to the global market - Backbench Notes Sharing (App), AweStack and Kudos Jump. Our mission is to make amazing apps and games that are used by as many people as possible.
Started in 2016 by two brothers - 
<b>Chetan Sharma</b> and <b>Pratik Sharma</b> - 
out of their sheer interest and curiosity in technology.
</h6>
    <Card text="Pratik"/>
    </div>
        
    )
};

export default Our_Story;