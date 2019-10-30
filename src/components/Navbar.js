import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import logo from '../images/BackbenchLarge.jpg'
import '../App.css'
const Navbar = (props) => {
    return(
        <nav >
            <div className="nav-wrapper black darken-3">
                <img src={logo} alt=''  />
                <ul className="right">
                    <li><Link to="/Our_Story">Our  Story</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Applications">App & Games </Link></li>
                    <li><Link to="/Videos">Videos</Link></li>
                    <li><Link to="/Blogs">Blogs</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar)