import React from 'react'
import '../Card.css'

const videoList = [
    "https://www.youtube.com/embed/ccTdAlVRZn0",
    "https://youtube.com/embed/u7qw4-QgPXk",
    "https://youtube.com/embed/UwN0eFvTtf4",
    "https://youtube.com/embed/wgzJJS75yfE",
    "https://youtube.com/embed/boEDJeTqah4",
    "https://youtube.com/embed/600HsNST7sk"
]

const video = () => (
    <div className="videoContainer">
        <ul>{videoList.map(video => <iframe width="560" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)}</ul>
    </div>
)
 
export default video;