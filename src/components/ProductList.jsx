import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { FaSearch } from 'react-icons/fa';
import { useCartContext } from '@/context/CartContext';

function ProductList() {
    const [products, setProducts] = useState([]); // Manages products data from the server
    const {cart, updateCart} = useCartContext();

    const[searchWord, setSearchWord] = useState("");
    // const[searchResult, setSearchResult] = useState();

    console.log(searchWord);

    // Manages product data from user
    const [product, setProduct] = useState({
        name: "",
        brand: "",
        price: "",
        imageUrl: "",
        description: ""
    });

    // Implement searching products in realtime
    let searchResult = products.filter(product => product.name.toLowerCase().includes(searchWord.toLowerCase()));
        

    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:5000/api/products");
                setProducts(response.data.products);
            } catch (error) {
                setError(error.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);


    const handleInput = (e) => {
        setProduct({...product, [e.target.name] : e.target.value});
    }

    const addToCat = (product) => {
        // Nothing to do when the quantity is zero or "Add to cart button" already clicked
        // console.log(cartClicked);
        // if (quantity === 0 || cartClicked) {
        //     return;
        // }

        const addedProduct = {
            id: product.id,
            imageUrl: product.imageUrl,
            name: product.name, 
            price: product.price,
            quantity: 1
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


    const addNewProduct = async (e) => {
        console.log("clicked");
        e.preventDefault();

        const {name, brand, price, imageUrl, description} = product;
        if (name === "" ||  brand === "" ||  price === "" || imageUrl === "" || description === "") {
            return;
        }

        try {
            setLoading(true);
            console.log(product);
            const response = await axios.post("http://localhost:5000/api/products", product);
            setProducts({...products, response});
            console.log(response.data.product);
        } catch (error) {
            setError(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-[570px] px-5">
            <div>
                <div>
                    <div className='bg-blue-50 border-b border-b-blue-100 pb-1'>

                        <form id="search-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" name="search" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} placeholder="Search" />
                            <button type="submit" name="submit" title="Search"><FaSearch style={{ marginRight: '8px', color: 'white' }} /></button>
                        </form>

                        <h1 className="text-gray-800">Kindly choose the products you like from BinaryTronics</h1>
                        <h3 className="italic text-gray-700">List of available products</h3>
                    </div>

                    {loading && <p>Loading...</p>}
                    {error && ( 
                        <p className="text-red-500" > Error: {error}</p>
                    )}
                    
                    <div className="products-list">
                        {(searchWord && searchResult.length < 1) && (
                            <div className="flex justify-center pt-8">
                                <h4 className="bg-blue-100 text-blue-500 p-5 text-4xl border border-blue-300 rounded">No Result Match</h4>
                            </div>
                        )}

                        {(searchWord && searchResult.length > 0) && (
                            searchResult.map(product => (
                                <ProductCard key={product.id} product={product} onAddToCart={addToCat} />
                            ))
                        )}

                        {!searchWord && (
                            products.map(product => (
                                <ProductCard key={product.id} product={product} onAddToCart={addToCat} />
                            ))
                        )}

                    </div>
                </div>
            </div>

            {/* <form className="product-form" onSubmit={addNewProduct}>
                    <h3>Add new product to the list</h3>
                    <label htmlFor="input-image-url">Image: </label> <br />
                    <input type="text" id="input-image-url" name="imageUrl" value={product.imageUrl} onChange={handleInput} placeholder="Enter image link"/> <br />
                    
                    <label htmlFor="input-phone-name">Name: </label> <br />
                    <input type="text" id="input-phone-name" name="name" value={product.name} onChange={handleInput} placeholder="Enter phone name"/> <br />

                    <label htmlFor="input-brand-name">Brand: </label> <br />
                    <input type="text" id="input-brand-name" name="brand" value={product.brand} onChange={handleInput} placeholder="Enter brand name"/> <br />
                    
                    <label htmlFor="input-phone-price">Price: </label> <br />
                    <input type="text" id="input-phone-price" name="price" value={product.price} onChange={handleInput} placeholder="Enter phone price"/> <br />

                    <label htmlFor="description">Description: </label> <br />
                    <textarea id="description" name="description" value={product.description} onChange={handleInput} placeholder="Enter phone description"></textarea> <br />

                    <button type="submit">Add new product</button>
            </form> */}

        </div>
    )
}

export default ProductList