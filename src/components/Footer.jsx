import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer ">
        <div className='footer-content bg-blue-200 text-l text-blue-600 font-bold'>
            <div>
                <p className='text-3xl text-blue-600 font-bold italic'>BinaryTronics</p>
                <p>Address: Dar es Salaam, Tanzania.</p>
                <p>Email: hello@binary-tronics.com</p>
                <p>Tel: +255 (0) 768 140150</p>

            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Products">Products</Link></li>
                        <li><Link to="/Cart">Cart</Link></li>
                        <li><Link to="/Register">Register</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to="">X (Twiter)</Link></li>
                        <li><Link to="">Instagram</Link></li>
                        <li><Link to="">YouTube</Link></li>
                        <li><Link to="">Facebook</Link></li>
                        <li><Link to="">Tiktok</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <p className='text-center p-3 bg-blue-100 text-l text-blue-500 font-bold'>Copyright &copy; BinaryTronics 2026. All Rights Reserved. </p>
    </div>

  )
}

export default Footer