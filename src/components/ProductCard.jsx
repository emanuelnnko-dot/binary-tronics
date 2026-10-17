import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
    // console.log(product);

    return (
        <>
            <div  className="product-card">
                <div className="image-container">{product.imageUrl ? <img src={product.imageUrl} alt={product.name}/> : <img src="/images/products-images/no-image-available-icon.jpg" alt="No image available"/> }</div>
                <div className="product-content">
                    <p className="product-name">Name: {product.name}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Price: KSh {product.price}</p>
                </div>
                <p><Link to={`/ProductDetails/${product.id}`}>View details</Link></p>
            </div>
        </>
    )
}

export default ProductCard