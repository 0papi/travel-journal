import React from 'react';


import globe from '../images/globe.svg'
import './header.css'


const Header = () => {
    return (
        <div className="header">
            <img src={globe} alt="" />
            <p>my travel journal.</p>
        </div>
    )
}

export default Header;