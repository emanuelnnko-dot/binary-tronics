import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useParams } from "react-router-dom";

function ProductDetailsComp() {
    const {id} = useParams(); // The Id to find a specific products
    console.log(id);

    const [products, setProducts] = useState([]); // Manages products data from the server
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    // Hooks for counter and add to cart functionality
    const [count, setCount] = useState(0);
    // const [addedProduct, setAddedProduct] = useState({id: "", count: 0});
    const [cartClicked, setCartClicked] = useState(false);

    // Fetch product data from the server
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             setLoading(true);
    //             console.log(id);
    //             const response = await axios.get(`http://localhost:5000/api/products/${id}`);
    //             console.log("Function was called");
    //             setProduct(response.data.products);
    //         } catch (error) {
    //             console.error(error.message);
    //             setError(error.message || "Something went wrong");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     fetchProduct();
    // }, []);

    // console.log(product);

    // console.log("Passing");
    // // useEffect(() => {
    //     console.log("Passing");
    //     const fetchProducts = async() => {
    //         console.log("Passing");
    //         try {
    //             // setLoading(true);
    //             const response = await axios.get("http://localhost:5000/api/products");
    //             console.log(response.data.products);
    //             // setProducts(response.data.products);
    //         } catch (error) {
    //             // setError(error.message || "Something went wrong");
    //         } finally {
    //             // setLoading(false);
    //         }
    //     }
    //     fetchProducts();
    // // }, []);

    useEffect(() => {
        console.log("Passing");
        const fetchProducts = async () => {
            console.log("Passing");
            try {
                console.log("Passing");
                const response = await axios.get("http://localhost:5000/api/products");
                console.log(response.data.products);
            } catch (error) {

            } finally {

            }
        }
        fetchProducts();
    }, []);

    console.log(products);

    const product = products.find(product => product.id === id);
    console.log(product);


    let buttonText = "";
    if (!cartClicked) {
        buttonText = "Add to cart"
    } else {
        buttonText = "Added to cart";
    }

    const addToCat = () => {
        console.log(count);
        console.log(cartClicked);

        // Nothing to do when the count is zero or Add to cart button already clicked
        console.log(cartClicked);
        if (count === 0 || cartClicked) {
            return;
        }

        console.log(buttonText);
        const retrievedUserCart = JSON.parse(localStorage.getItem("userCart"));
        console.log(retrievedUserCart);
        const addedProduct = {id: id, count: count};
        if (!retrievedUserCart) {
            console.log("was not available");
            const userCart = [];
            userCart.push(addedProduct);
            localStorage.setItem("userCart", JSON.stringify(userCart));
            console.log(userCart);
            setCartClicked(true);
            // Redirect user to products page after successful put data in local storage
        } else {
            console.log("was available");
            retrievedUserCart.push(addedProduct);
            const updatedUserCart = retrievedUserCart;
            localStorage.setItem("userCart", JSON.stringify(updatedUserCart));
            console.log(updatedUserCart);
            setCartClicked(true);
            // Redirect user to products page after successful put data in local storage
        }
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
                <p>Description: {product.imageUrl}
                </p>
            </div>
            
            <div className="buttons-container">
                <div className="counter">
                    <p onClick={() => {setCount(preCount => preCount !== 0 ? preCount - 1 : 0)}}> - </p> 
                    <p> {count} </p> 
                    <p onClick={() => {setCount(preCount => preCount + 1)}}> + </p>
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

export default ProductDetailsComp;
