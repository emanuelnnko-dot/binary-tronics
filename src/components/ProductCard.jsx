import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product, onAddToCart}) {
    // console.log(product);

    return (
        <>
            <div  className="product-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-4 font-sans">
                <div className="image-container">{product.imageUrl ? <img src={product.imageUrl} alt={product.name}/> : <img src="/images/products-images/no-image-available-icon.jpg" alt="No image available"/> }</div>
                <div className="product-content">
                    <p className="product-name text-gray-800 text-lg font-medium tracking-wide">Name: {product.name}</p>
                    <p>Brand: {product.brand}</p>
                    <p><span>Price: </span> <span className="text-[#5E49E2] text-xl font-bold">TSh {product.price}</span></p>
                    
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 border border-gray-200 p-1 rounded">
                    <Link to={`/ProductDetails/${product.id}`}>
                        <button className='border border-gray-300 bg-gray-200 py-1 px-8'>
                            View details
                        </button>
                    </Link>
                    <button onClick={() => onAddToCart(product)} className="bg-blue-300 text-blue border-green-500">
                        <FontAwesomeIcon icon={faBagShopping} size="lg" color="blue" />
                        <p className="inline pb-5">Add to cart</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard