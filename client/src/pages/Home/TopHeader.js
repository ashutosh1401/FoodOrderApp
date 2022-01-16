import React from 'react'
import { Link } from "react-router-dom";
import './TopHeader.css'

const TopHeader = () => {
    return (
        <div className='image-container'>
            {/* <img src="https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food-1536x1024.jpg" 
                alt='Top Header' className='image-img'/> */}
            <ul className='image-navbar'>
                <Link to='#addres'><li className='image-navbar-item'>Add Resturant</li></Link>
                <Link to='/login'><li className='image-navbar-item'>Login</li></Link>
                <Link to='/signup'><li className='image-navbar-item'>Signup</li></Link>
            </ul>
            <div className='image-content'>
                <h1>Foodie</h1>
                <p>Discover the best food & drinks at your Location</p>
            </div>
        </div>
    )
}

export default TopHeader