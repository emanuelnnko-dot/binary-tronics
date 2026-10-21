import CartItem from "@/components/CartItem";
import { useCartContext } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const {cart, updateCart} = useCartContext();

  // Calculate products quantity in the cart
  let productsQuantity = 0;
  cart.forEach(product => {
      productsQuantity += product.quantity;
  });
  
  // Calculate subtotal cost (Before delivering cost)
  let productsSubTotal = 0;
  cart.forEach(product => {
      productsSubTotal += product.price;
  });

  function deleteCartItem(id) {
    const updatedCart = cart.filter(item => item.id !== id);
    updateCart(updatedCart);
  }

  {console.log(cart)}
  
  return (

    <div className="min-h-[570px] bg-white text-gray-900 px-35">

      {
        !cart.length > 0 ? (
          <div className="flex justify-center pt-8">
            <h4 className="bg-blue-100 text-blue-500 p-5 text-4xl border border-blue-300 rounded">Your cart is currently empty</h4>
          </div>
        ) : (
          <>

            {/* Page heading */}
            <header className="border-b border-gray-100 px-4 py-5 sm:py-7">
              <h1 className="text-center text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Your cart
              </h1>
            </header>

            <main className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

              {/* Cart content */}
              <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_300px]">
                
                {/* Product list */}
                <section className="min-w-0">
                  <div className="divide-y divide-gray-100">
                    
                    {/* Render Cart Item(s) */}
                    {cart.map(item => (
                      <CartItem key={item.id} cartItem={item} onDeleteItem={deleteCartItem} />
                    ))}
                    

                  </div>
                </section>

                {/* Cart totals */}
                <aside className="h-fit overflow-hidden rounded-xl bg-blue-300 text-white border border-blue-300">
                  <div className="p-6 sm:p-7">
                    <h2 className="text-lg font-medium">Cart Subtotal ({productsQuantity} items)</h2>
                  </div>
                  <div className="border-t border-white/20 p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-3 text-sm pb-2">
                        <span>Total</span>
                        <span className="text-base font-medium">Tsh. {productsSubTotal}</span>
                      </div>

                      <Link to="/checkout">
                          <button
                            type="button"
                            className="mt-6 w-full rounded-[25px] bg-blue-400 px-5 py-4 text-sm font-bold text-blue-700 transition hover:bg-blue-500"
                          >
                            Checkout
                          </button>
                      </Link>
                  </div>
                </aside>
              </div>
                  
            </main>

          </>
        )
      }
    </div> 

  );

}
