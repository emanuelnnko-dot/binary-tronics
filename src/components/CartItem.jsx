import React from 'react'

function CartItem({cartItem, onDeleteItem}) {
    console.log(cartItem);

  return (
    
    <>
        <article className="grid grid-cols-[100px_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6">
        <div className="flex h-28 items-center justify-center">
            <img
            src={cartItem.imageUrl}
            alt={cartItem.name}
            className="h-full w-full object-contain"
            />
        </div>

        <div className="min-w-0">
            <div className="flex items-start justify-between gap-3">
            <div>
                <h2 className="text-sm font-medium leading-6 sm:text-base">
                    {cartItem.name}
                </h2>
            </div>

            <button
                type="button"
                aria-label="Remove item"
                className="flex bg-red-300 h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 text-lg leading-none text-white hover:bg-red-500"
                onClick={() => onDeleteItem(cartItem.id)}
            >
                &times;
            </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm">Quantity:</span>
                <span className="flex h-10 w-14 items-center justify-center rounded-lg border border-blue-400 text-sm text-gray-500">
                    {cartItem.quantity}
                </span>
            </div>

            <p className="text-sm font-medium text-blue-600 sm:text-base">
                {cartItem.price}
            </p>
            </div>
        </div>
        </article>

    </>

  )
}

export default CartItem