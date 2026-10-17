import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

    return (
        <div className="flex justify-center gap-35 p-5 bg-blue-200 ">
            <p className='text-3xl text-blue-600 font-bold font-serif italic'>BinaryTronics</p>
            <nav className="header flex gap-20 text-xl text-blue-700 font-bold">
                <ul className="flex gap-3">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Products">Products</NavLink></li>
                    <li><NavLink to="/Cart">
                        <div className='shoppingBagContainer'>
                            <FontAwesomeIcon icon={faBagShopping} size="lg" color="blue" />
                            <p className="cartCount">0</p>
                        </div>                        
                    </NavLink></li>
                    
                </ul>
                <ul className="flex gap-3">
                    <li><NavLink to="/Register">Register</NavLink></li>
                    <li><NavLink to="/Login">Login</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header