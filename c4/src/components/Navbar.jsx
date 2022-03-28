import React from "react"
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="nav heading_style">
            <Link to="/" style={{margin: "10px"}}><span className="navInnerDiv">Home</span></Link>
            <Link to="/prod" style={{margin: "10px"}}><span className="navInnerDiv">Product</span></Link>
            <Link to="/about" style={{margin: "10px"}}><span className="navInnerDiv">About</span></Link>
        </div>
    )
}
export default Navbar