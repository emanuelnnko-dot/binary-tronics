import { useCartContext } from "@/context/CartContext";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const {id} = useParams(); // The Id to find a specific product and display its details

    const [products, setProducts] = useState([]); // Manages products data from the server
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const {cart, updateCart} = useCartContext();

    // Hooks for quantitying quantity of products added to the cart and add to cart functionality
    const [quantity, setquantity] = useState(0);
    const [cartClicked, setCartClicked] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:5000/api/products");
                setProducts(response.data.products);
                setError(error.message || "Something went wrong");
            } catch (error) {
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    console.log(products);
    // Find specific product that matches the  ID (product ID) obtained form the URL param
    const product = products.find(product => product.id === id);

    let buttonText = "";
    if (!cartClicked) {
        buttonText = "Add to cart"
    } else {
        buttonText = "Added to cart";
    }

    const addToCat = () => {
        // Nothing to do when the quantity is zero or "Add to cart button" already clicked
        console.log(cartClicked);
        if (quantity === 0 || cartClicked) {
            return;
        }

        const addedProduct = {
            id: id,
            imageUrl: product.imageUrl,
            name: product.name, 
            price: product.price * quantity,
            quantity: quantity
        };

        if (!cart) {
            const cart = [];
            cart.push(addedProduct);
            updateCart(cart);
            setCartClicked(true);
        } else {
            const existingProduct = cart.find(product => product.id === addedProduct.id);
            if (!existingProduct) {
                updateCart([...cart, addedProduct]);
                setCartClicked(true);
            } else {
                console.log("Cart + Product Exist");
                const updatedCart = cart.map(item => (
                    item.id === addedProduct.id ? {...item, quantity: item.quantity + addedProduct.quantity, price: item.price + addedProduct.price} : item
                ));
                updateCart(updatedCart);
                setCartClicked(true);
            }
        }
    }

    if (product === undefined) {
        return <div>Loading data...</div>;
    }

  return (

    <div className="product-details">
        {loading && <p>Loading...</p>}

        {error && ( 
            <p className="text-red-500" > Error: {error}</p>
        )}
        
        <div className="image-container">
            <img src={product.imageUrl} alt={product.name}/>
        </div>
        <div className="">
            <div className="content">
                <h4 className="text-3xl">Name: {product.name}</h4>
                <p>Brand: {product.brand}</p>
                <p>Price: <span className="text-2xl ">Ksh {product.price}</span></p>
                <p>Description: {product.description}
                </p>
            </div>
            
            <div className="buttons-container">
                <div className="counter">
                    <p onClick={() => {setquantity(prevQuantity => prevQuantity !== 0 ? prevQuantity - 1 : 0)}}> - </p> 
                    <p> {quantity} </p> 
                    <p onClick={() => {setquantity(prevQuantity => prevQuantity + 1)}}> + </p>
                </div>
                <button onClick={addToCat} className="bg-green-300 border-green-500">
                    <FontAwesomeIcon icon={faBagShopping} size="lg" color="green" />
                    <p className="inline pb-5">{buttonText}</p>
                </button>
            </div>
        </div>
    </div>
  );
}

export default ProductDetails;
