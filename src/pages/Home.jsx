import React from 'react';

export default function Home() {
  return (
    <div className="min-h-[570px] bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="pl-25 w-7xl mx-auto space-y-8">
        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Hero Card */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-blue-50 via-slate-100 to-indigo-100 rounded-2xl p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-sm min-h-[480px]">

            {/* Content Top */}
            <div className="space-y-4 max-w-md relative z-10">
              
              <h2 className=" text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight ">
                Welcome to Binary-Tronics 
              </h2>
              <p className="text-3xl sm:text-xl font-black text-indigo-900 tracking-wider">
                For Brand New Smartphones
              </p>
              
              <div className="pt-2">
                <p className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 group shadow-md shadow-amber-500/20">
                  <span>Explore Our Products</span>
                </p>
              </div>
            </div>

            {/* Center Product Visual Aspect */}
            <div className="absolute right-4 bottom-16 sm:bottom-4 w-72 sm:w-96 h-auto z-10 pointer-events-none transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full aspect-square flex items-center justify-center">
                <img 
                  src="/images/products/smartphones/apple-iphone-17-pro-max.jpg" 
                  alt="iPhone 17 Pro Max" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Footer Row: Contact & Promo Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-12 relative z-10 mt-auto">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm sm:text-base">
                <span className="text-amber-500 text-lg">▶</span>
                <span>Call Now :</span>
                <span className="text-slate-600 font-medium"> +255 756 420367 </span>
              </div>

              {/* Curving 50% OFF Badge */}
              <div className="relative self-end sm:self-auto bg-blue-700 text-white px-8 py-6 rounded-tl-[4rem] rounded-br-2xl shadow-xl flex flex-col items-center justify-center -mr-8 -mb-12 sm:-mb-12 w-44">
                <span className="text-xs uppercase tracking-widest text-blue-200 font-semibold">Get</span>
                <span className="text-3xl font-black leading-none">25%</span>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-100">Off</span>
              </div>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-6">
            
            {/* Top Right Card (Phone Banner) */}
            <div className="bg-slate-100 rounded-2xl p-6 flex justify-between items-center overflow-hidden shadow-sm relative h-[228px]">
              <div className="space-y-2 max-w-[55%] z-10">
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 uppercase leading-snug">
                  Apple iPhone 13 Pro Max <span className="text-blue-600 block">(128GB)</span>
                </h4>
                <p className="text-amber-500 font-extrabold text-sm sm:text-base tracking-wide">
                  10% OFF
                </p>
              </div>
              <div className="w-[45%] h-full flex items-center justify-center absolute right-0 top-0 bottom-0">
                <img 
                  src="/images/products/smartphones/apple-iphone-13-pro-max.jpg" 
                  alt="Apple iPhone" 
                  className="h-[110%] w-auto object-cover object-left transform rotate-3"
                />
              </div>
            </div>

            {/* Bottom Right Card (Travel Bags Banner) */}
            <div className="bg-slate-100 rounded-2xl p-6 flex justify-between items-center overflow-hidden shadow-sm relative h-[228px]">
              <div className="space-y-1 max-w-[55%] z-10">
                <p className="text-amber-500 font-bold text-sm sm:text-base">
                  20% OFF
                </p>
                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                  Android <span className="text-slate-700 font-medium">Phones</span>
                </h4>
              </div>
              <div className="w-[45%] h-full flex items-center justify-end absolute right-2 bottom-0">
                <span className="absolute left-0 text-slate-200/50 text-8xl font-black select-none z-0">
                </span>
                <img 
                  src="/images/products/smartphones/oppo-a6x.jpg" 
                  alt="Oppo phone"
                  className="h-[85%] w-auto object-contain relative z-10 drop-shadow-lg"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="relative top-10 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y-0 md:divide-x divide-slate-100">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-2 space-y-2">
              <div className="text-3xl text-slate-700" aria-hidden="true">
                🎧
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Customer Support</h4>
                {/* <p className="text-xs text-slate-500">Need Assistance?</p> */}
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-2 space-y-2">
              <div className="text-3xl text-slate-700" aria-hidden="true">
                💳
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Secure Payment</h4>
                {/* <p className="text-xs text-slate-500">Safe & Fast</p> */}
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-2 space-y-2">
              <div className="text-3xl text-slate-700" aria-hidden="true">
                🔄
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Free Returns</h4>
                {/* <p className="text-xs text-slate-500">Easy & Free</p> */}
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-2 space-y-2">
              <div className="text-3xl text-slate-700" aria-hidden="true">
                🚚
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">We Delivery All Order</h4>
                {/* <p className="text-xs text-slate-500">Easy & Free</p> */}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
