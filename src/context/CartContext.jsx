import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({children}) {
    const [cart, setCart] = useState(() => {
        const savedcart = localStorage.getItem("cart");
        return (savedcart && savedcart !== "undefined") ? JSON.parse(savedcart) : null;
    });

    function updateCart(cartData) {
        localStorage.setItem("cart", JSON.stringify(cartData));
        setCart(cartData);
    }

    function clearCart() {
        localStorage.removeItem("cart");
        setCart(null);
    }

    return (
        <>
            <CartContext.Provider value={{cart, updateCart, clearCart}}>
                {children};
            </CartContext.Provider>

        </>
    )
}

export function useCartContext() {
    return useContext(CartContext);
}