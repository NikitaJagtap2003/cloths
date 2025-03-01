import React from 'react';
import './App.css';
import { Filter, ShoppingCart, Tag } from 'lucide-react';
import { WEBSITE_NAME, CARD_TITLE, PRODUCT_PRICE, MAIN_IMG, SUB_IMG, SUB_IMG1, SUB_IMG2, SUB_IMG3 } from './config';

export default function App() {
  return (
    <div className='bg-gray-100 min-h-screen py-10 px-5'>
      <h1 className='text-5xl font-bold text-center text-gray-800'>{WEBSITE_NAME}</h1>

      {/* Filter and Cart Buttons */}
      <div className='flex justify-end space-x-4 my-6'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center shadow-md hover:bg-blue-600 transition'>
          <Filter className='w-5 h-5 mr-2' /> All
        </button>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center shadow-md hover:bg-blue-600 transition'>
          <Filter className='w-5 h-5 mr-2' /> Men
        </button>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center shadow-md hover:bg-blue-600 transition'>
          <Filter className='w-5 h-5 mr-2' /> Women
        </button>
        <button className='px-4 py-2 bg-green-500 text-white rounded-lg flex items-center shadow-md hover:bg-green-600 transition'>
          <ShoppingCart className='w-5 h-5 mr-2' /> 0
        </button>
      </div>

      {/* Product Card */}
      <div className='flex justify-center'>
        <div className='bg-white rounded-xl shadow-lg p-6 flex space-x-8 w-[900px]'>
          {/* Product Image */}
          <div>
            <img src={MAIN_IMG} alt='img' className='w-[320px] h-[480px] rounded-lg shadow-md' />
            <div className='flex space-x-4 mt-4'>
              <button className='w-full px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition'>Add to Cart</button>
              <button className='w-full px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition'>Buy Now</button>
            </div>
          </div>
          
          {/* Product Details */}
          <div className='flex-1'>
            <h1 className='text-3xl font-semibold text-gray-800'>{CARD_TITLE}</h1>
            <h2 className='text-2xl font-bold text-green-600 my-4'>{PRODUCT_PRICE}</h2>
            
            {/* Thumbnail Images */}
            <div className='flex space-x-2'>
              <img src={SUB_IMG} alt='img' className='w-20 h-20 rounded-md shadow' />
              <img src={SUB_IMG1} alt='img' className='w-20 h-20 rounded-md shadow' />
              <img src={SUB_IMG2} alt='img' className='w-20 h-20 rounded-md shadow' />
              <img src={SUB_IMG3} alt='img' className='w-20 h-20 rounded-md shadow' />
            </div>
            
            {/* Offers Section */}
            <div className='mt-6'>
              <h3 className='text-xl font-semibold text-gray-800'>Available Offers</h3>
              <hr className='my-2' />
              <p className='text-gray-600'><Tag className='w-4 h-4 inline-block text-blue-500' /> <span className='font-bold'>Bank Offer:</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card.</p>
              <p className='text-gray-600'><Tag className='w-4 h-4 inline-block text-blue-500' /> <span className='font-bold'>Bank Offer:</span> 10% off on BOBCARD Transactions, up to ₹1,000 on orders of ₹5,000 and above.</p>
              <p className='text-gray-600'><Tag className='w-4 h-4 inline-block text-blue-500' /> <span className='font-bold'>Combo Offer:</span> Buy 2 or more items & save ₹20.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}