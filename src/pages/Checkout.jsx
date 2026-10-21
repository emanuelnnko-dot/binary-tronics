import { useCartContext } from '@/context/CartContext';
import React, { useState } from 'react';

export default function OrderSummarySidePanel() {
    const [deliveryLocation, setDeliveryLocation] = useState("tanga");
    const [paymentOption, setPaymentOption] = useState("m-pesa");

    const {cart} = useCartContext();

    const orderNumber = crypto.randomUUID();
  
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

    const handleChangeSelectDeliveryLocation = (e) => {
        setDeliveryLocation(e.target.value);
    }

    // console.log(deliveryLocation);

    let deliveryCost = 0;
    switch (deliveryLocation) {
        case "tanga":
            deliveryCost = 30000;
            break;
        case "arusha":
            deliveryCost = 40000;
            break;
        case "mwanza":
            deliveryCost = 50000;
            break;        
    }

    // Calculate total cost (Subtotal cost + Delivery cost)
    const totalCost = productsSubTotal + deliveryCost;

    const handleChangeRadioPayment = (e) => {
        setPaymentOption(e.target.value);
    }

  return (
    // Outer container div
    <div className="flex ">

        {/* left section ************************************************************************************** */}

        <div className=" w-[1000px] ">
            <div className="min-h-screen bg-slate-50 flex justify-center p-4 antialiased">
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-lg px-8 py-3 shadow-sm">
        
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Delivery Information</h2>
        </div>

        {/* Delivery information */}
        <form className="space-y-4">
          <h4 className="text-sm font-bold text-blue-900 tracking-wide uppercase">
            Client Details
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 py-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="First name"
                className="w-full text-xs text-slate-700 bg-white border border-slate-300 rounded px-3 py-2.5 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 py-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full text-xs text-slate-700 bg-white border border-slate-300 rounded px-3 py-2.5 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 py-2">
              Email
            </label>
            <input
              type="text"
              placeholder="Your email address"
              className="w-full text-xs placeholder-slate-400 text-slate-700 bg-white border border-slate-300 rounded px-3 py-2.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 py-2">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full text-xs placeholder-slate-400 text-slate-700 bg-white border border-slate-300 rounded px-3 py-2.5 focus:outline-none focus:border-blue-500"
              />
            </div>

          </div>

          {/* Delivery Location */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 py-2">
              Delivery Location
            </label>
            <div className="relative">
              <select
                value={deliveryLocation}
                onChange={handleChangeSelectDeliveryLocation}
                className="w-full text-xs text-slate-400 bg-white border border-slate-300 rounded px-3 py-2.5 appearance-none focus:outline-none focus:border-blue-500"
              >
                <option name="destination" value="tanga">Tanga City</option>
                <option name="destination" value="arusha">Arusha City</option>
                <option name="destination" value="mwanza">Mwanza City</option>
              </select>
              
            </div>
          </div>

        {/* Selected Delivery Location */}
        <div className="pt-2">
            <h4 className="text-sm font-bold text-blue-900 tracking-wide pb-1  mb-3"> Selected Delivery Location </h4>

            {/* Delivering in Tanga - Displayed only when user select Tanga option  */}
            {
                (deliveryLocation === "tanga") && 
                (
                    <div className='border border-blue-300 bg-blue-50 rounded p-2'>
                        <h4 className="text-sm font-bold text-gray-600 border-b border-gray-300 pb-1">
                            We deliver our packages through our partners (bus companies). You should pick your package at respective bus office
                        </h4>
                        <h5  className="text-sm font-bold text-gray-600"> Delivering in Tanga: </h5>
                        <p>
                            <span  className="text-sm font-bold text-gray-600"> Bus (our partner): </span> 
                            <span className="text-[12px] font-bold text-gray-400 pl-1"> Tashrif Luxury Bus </span>
                        </p>            
                        <p>
                            <span className="text-sm font-bold text-gray-600"> Delivery cost: </span> 
                            <span className="text-[12px] font-bold text-gray-400 pl-1"> Tsh. 30,000 </span>
                        </p>
                        <div>
                            <p className="text-sm font-bold text-gray-600"> Expected package arrival duration: </p> 
                            <p className="text-[12px] font-bold text-gray-400"> About 1 day after you have completed purchase </p>
                        </div>
                    </div>
                )
            }

            {/* Delivering in Arush - Displayed only when user select Arusha option  */}
            {
                (deliveryLocation === "arusha") && 
                (
                    <div className='border border-blue-300 bg-blue-50 rounded p-2'>
                        <h4 className="text-sm font-bold text-gray-600 border-b border-gray-300 pb-1">
                            We deliver our packages through our partners (bus companies). You should pick your package at respective bus office
                        </h4>
                        <h5  className="text-sm font-bold text-gray-600"> Delivering in Arusha: </h5>
                        <p>
                            <span  className="text-sm font-bold text-gray-600"> Bus (our partner): </span> 
                            <span className="text-[12px] font-bold text-gray-400 pl-1"> BM Luxury Couch </span>
                        </p>            
                        <p>
                            <span className="text-sm font-bold text-gray-600"> Delivery cost: </span> 
                            <span className="text-[12px] font-bold text-gray-400 pl-1"> Tsh. 40,000 </span>
                        </p>
                        <div>
                            <p className="text-sm font-bold text-gray-600"> Expected package arrival duration: </p> 
                            <p className="text-[12px] font-bold text-gray-400"> About 1 day after you have completed purchase </p>
                        </div>
                    </div>
                )
            }

            {/* Delivering in Mwanza - Displayed only when user select Mwanza option  */}
            {
                (deliveryLocation === "mwanza") && 
                (
                    <div className='border border-blue-300 bg-blue-50 rounded p-2'>
                        <h4 className="text-sm font-bold text-gray-600 border-b border-gray-300 pb-1">
                            We deliver our packages through our partners (bus companies). You should pick your package at respective bus office
                        </h4>
                        <h5  className="text-sm font-bold text-gray-600"> Delivering in Mwanza: </h5>
                        <p>
                            <span  className="text-sm font-bold text-gray-600"> Bus (our partner): </span> 
                            <span className="text-[12px] font-bold text-gray-400 pl-1"> Happy Nation Bus </span>
                        </p>            
                        <p>
                            <span className="text-sm font-bold text-gray-600"> Delivery cost: </span> 
                            <span className="text-[12px] font-bold text-gray-400 pl-1"> Tsh. 50,000 </span>
                        </p>
                        <div>
                            <p className="text-sm font-bold text-gray-600"> Expected package arrival duration: </p> 
                            <p className="text-[12px] font-bold text-gray-400"> About 1 day after you have completed purchase </p>
                        </div>
                    </div>
                )
            }

            {/* Contact to stay connected via phone */}
            <div className="space-y-5 pt-5">
                {/* Contact Details */}
                <div className="border border-gray-300 p-5 rounded text-center bg-gray-100">
                    <h4 className="text-sm font-bold text-slate-800 border-b border-gray-400 pb-2">Need help? Contact Us!</h4>
                    <p className="text-[12px] text-gray-400 font-medium mt-0.5 pt-3">Please Call (WhatsApp):</p>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">+255 756 420367</p>
                    <div className="text-[12px] text-gray-400 font-medium mt-1 space-y-0.5">
                    <p className="pt-3">Monday - Friday: 8:00 - 20:00</p>
                    <p>Saturday: 9:00 - 16:00</p>
                    </div>
                </div>

            </div>
                        
        </div>

        </form>
      </div>
    </div>
        </div>
        {/* End of left section ******************************************************************************* */}

        {/* right section */}
        {/* Order summery */}
        <div className="w-full max-w-sm bg-gray-50 p-4 font-sans text-slate-900">
            <div className="space-y-6">
            
                {/* Main Order Summary Card */}
                <div className="bg-white rounded-lg border border-gray-100 px-6 py-2 shadow-sm">

                    <h2 className="text-base font-bold text-slate-900 border-b border-gray-100 pb-2 mb-4">
                        Order Summary
                    </h2>
                    <p className='py-1 text-[11px] font-bold text-gray-400 tracking-wider mb-3 px-1'>
                        Order Number: (Copy this number for future use)
                    </p>
                    <p className='pb-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-1'>
                        {orderNumber}
                    </p>

                    {/* Column Headers */}
                    <div className="flex justify-between border-t border-gray-300 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">
                        <span>Product</span>
                        <div className="flex space-x-12">
                        <span>Price</span>
                        </div>
                    </div>

                    {/* Product Items List */}
                    <div className="divide-y divide-gray-100">
                        {cart.map((item) => (
                            <div key={item.id} className="py-4 flex justify-between items-center first:pt-0 last:pb-0">
                                <div className="flex items-center space-x-3">
                                    {/* Gray Thumbnail Square */}
                                    <div className="w-12 h-12 bg-slate-200 rounded flex-shrink-0">
                                        <img src={item.imageUrl} alt={item.name} className="w-[100%]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                                        <p className="text-[10px] text-gray-500 font-medium mt-0.5">Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                                {/* Price */}
                                <div className="flex items-center space-x-14 text-xs font-bold">
                                    {/* <span className="text-slate-800 w-4 text-center">1</span> */}
                                    <span className="text-slate-900">Tsh. {item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total Calculation */}
                    <div className="mt-5 pt-5 border-t border-gray-100 space-y-3.5 text-xs font-medium px-1">
                        <div className="flex justify-between font-bold">
                            <span>Subtotal <span className="text-gray-400 font-bold">({productsQuantity} items)</span></span>
                            <span className="font-bold text-slate-800">Tsh. {productsSubTotal}</span>
                        </div>
                        <div className="flex justify-between pb-2 font-bold">
                            <span>Delivery Cost</span>
                            <span className="font-bold text-slate-800">Tsh. {deliveryCost}</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-gray-300">
                            <span>Total</span>
                            <span>Tsh. {totalCost}</span>
                        </div>
                    </div>
                </div>

                {/* Payment Options */}
                <p className="block text-xs font-bold text-slate-700 mb-1 pt-4 pb-1">
                    Payment Options
                </p>
                <div className='pb-2 pl-2'>
                    <input type='radio' id='m-pesa' name="payment" value="m-pesa" checked={paymentOption === "m-pesa"} onChange={handleChangeRadioPayment} />
                    <label htmlFor="m-pesa" className="pr-35 pl-1">M-pesa</label>

                    <input type='radio' id='crdb' name="payment" value="crdb" checked={paymentOption === "crdb"} onChange={handleChangeRadioPayment} />
                    <label htmlFor="crdb" className='pl-1'>Bank</label>
                </div>

                <div className="space-y-5 ">
                    {/* Payment Options */}

                    {
                        (paymentOption === "m-pesa") && 
                        (
                            <div className="border border-blue-300 p-3 rounded bg-gray-100">
                                <h4 className="text-sm text-center font-bold text-slate-800 border-b border-gray-400 pb-2">M-Pesa</h4>
                                <p>
                                    <span  className="text-sm font-bold text-gray-600"> Number: </span> 
                                    <span className="text-[12px] font-bold text-gray-400 pl-1"> 0756 607348 </span>
                                </p>   
                                <p>
                                    <span  className="text-sm font-bold text-gray-600"> Name: </span> 
                                    <span className="text-[12px] font-bold text-gray-400 pl-1"> Emanuel NNko </span>
                                </p>  
                                <form>
                                    <label className="block text-xs font-bold text-slate-700 mb-1 py-2">
                                        Verify Payment:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Put you transaction reference number"
                                        className="w-full text-xs text-slate-700 bg-white border border-slate-300 rounded px-3 py-2.5 focus:outline-none focus:border-blue-500"
                                    />
                                </form>  
                
                            </div>
                        )
                    }

                    {
                        (paymentOption === "crdb") && 
                        (
                            <div className="border border-blue-300 p-3 rounded bg-gray-100">
                                <h4 className="text-sm text-center font-bold text-slate-800 border-b border-gray-400 pb-2">Bank</h4>
                                <p>
                                    <span  className="text-sm font-bold text-gray-600"> Bank: </span> 
                                    <span className="text-[12px] font-bold text-gray-400 pl-1"> CRDB Bank </span>
                                </p> 
                                <p>
                                    <span  className="text-sm font-bold text-gray-600">Account Number: </span> 
                                    <span className="text-[12px] font-bold text-gray-400 pl-1"> 01J3467329702 </span>
                                </p>   
                                <p>
                                    <span  className="text-sm font-bold text-gray-600"> Name: </span> 
                                    <span className="text-[12px] font-bold text-gray-400 pl-1"> Binary Tronics </span>
                                </p>  
                                <form>
                                    <label className="block text-xs font-bold text-slate-700 mb-1 py-2">
                                        Verify Payment:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Put you transaction reference number"
                                        className="w-full text-xs text-slate-700 bg-white border border-slate-300 rounded px-3 py-2.5 focus:outline-none focus:border-blue-500"
                                    />
                                </form>  
                
                            </div>
                        )
                    }

                    
                </div>

                <div className='flex pt-5 justify-center'>
                    <button
                        type="button"
                        className="px-5 py-2 bg-blue-600 rounded text-xs font-medium text-white flex items-center hover:bg-blue-700 transition-colors"
                        >
                        Order Now
                    </button>
                </div>

            </div>
        </div>
    </div>

  );
}
