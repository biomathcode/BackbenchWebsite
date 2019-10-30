import React from 'react'
const Video_urls = {
    video1:"",
    video2: "",
    video3: "",
    video4: "",
    video5: "",
    video6: ""
}
const Videos = (props) => {
    /* setTimeout(() => {
        props.history.push('/about')
    }, 2000); */
    return (
        <div className="container" >
            <h4 className="center">Videos</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ccTdAlVRZn0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>
            <iframe width="560" height="315" src="https://youtube.com/embed/u7qw4-QgPXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>
            <iframe width="560" height="315" src="https://youtube.com/embed/UwN0eFvTtf4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>
            <iframe width="560" height="315" src="https://youtube.com/embed/wgzJJS75yfE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>
            <iframe width="560" height="315" src="https://youtube.com/embed/boEDJeTqah4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>
            <iframe width="560" height="315" src="https://youtube.com/embed/boEDJeTqah4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>
            <iframe width="560" height="315" src="https://youtube.com/embed/600HsNST7sk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At rem voluptas saepe cupiditate nemo iusto earum, dolorem numquam ea rerum ab fugit. Illo dolor laborum odit, excepturi velit minus modi!</p>
        </div>
    )
};

export default Videos;