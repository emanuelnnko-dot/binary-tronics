import { useUserContext } from '@/context/AuthContext'
import { useCartContext } from '@/context/CartContext'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const {cart} = useCartContext();
    const {user} = useUserContext();

    // Calculate products quantity in the cart
    let productsQuantity = 0;
    if (!cart) {
        productsQuantity = 0;
    } else {
        cart.forEach(product => {
            productsQuantity += product.quantity;
        });
    }

    console.log(productsQuantity);

    return (
        <div className="flex justify-center gap-35 p-5 bg-blue-200 ">
            <p className='text-3xl text-blue-600 font-bold italic'>BinaryTronics</p>
            <nav className="header flex gap-20 text-xl text-blue-700 font-bold">
                <ul className="flex gap-3">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Products">Products</NavLink></li>
                    <li><NavLink to="/Cart">
                        <div className='shoppingBagContainer'>
                            <FontAwesomeIcon icon={faBagShopping} size="lg" color="blue" />
                            <p className="cartCount">{productsQuantity}</p>
                        </div>                        
                    </NavLink></li>
                    
                </ul>
                <ul className="flex gap-3">
                    {user ? (
                        <>
                            <li>{user.firstName}</li>
                            <li><NavLink to="/Logout">Logout</NavLink></li>
                        </>
                        ) : (
                        <>
                            <li><NavLink to="/Register">Register</NavLink></li>
                            <li><NavLink to="/Login">Login</NavLink></li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Header