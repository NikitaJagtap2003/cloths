import React from 'react'
import './App.css'
import { Filter,ShoppingCart,Tag } from 'lucide-react'
import { WEBSITE_NAME,CARD_TITLE, PRODUCT_PRICE,MAIN_IMG,SUB_IMG,SUB_IMG1,SUB_IMG2,SUB_IMG3} from './config'


export default function App() {
  return (
    <div >
      <h1 className='text-5xl font-bold flex justify-center my-2 '>{WEBSITE_NAME}</h1>

      <div className='flex justify-end'>
        <button className='Button'><Filter className='flex inline-block mx-2 w-4 h-4' />All</button>
        <button className='Button'><Filter className='flex inline-block mx-2 w-4 h-4' />Men </button>
        <button className='Button'><Filter className='flex inline-block mx-2 w-4 h-4' />Women </button>
        <button className='Button'><ShoppingCart className='flex inline-block mx-2 w-4 h-4'/>0</button>
      </div>

      <div className='flex justify-center bg-gray-200 w-[1000px] h-[550px] mx-10 my-10 rounded-lg border'>
        {/* Card */}
        <div>
          <img src={MAIN_IMG} alt='img'  className='w-[300px] h-[450px] py-5 mx-4'/>
          <button className='Button1'>Add to Cart</button>
          <button className='Button1 '>Buy Now</button> 
        </div>
        {/* card Deatil */}
        <div>
          <h1 className='text-2xl mx-6 py-3'>{CARD_TITLE}</h1>
          {/* Price*/}
          <h2 className='text-2xl mx-6 font-bold'>{PRODUCT_PRICE}</h2>
           {/* images */}
          <div className=' flex w-[150px] h-[200px] py-5 mx-5 '>
            <img src={SUB_IMG} alt='img' />
            <img src={SUB_IMG1} alt='img' />
            <img src={SUB_IMG2} alt='img'/>
            <img src={SUB_IMG3} alt='img'/>
          </div>
          {/* offers */}
          <div className=' mx-6 text-sm'>
            <h3 className='text-xl'>Available offers</h3> 
            <hr></hr>
            <p><Tag className='w-4 h-4 inline-block' /><span className='font-bold'>Bank Offer5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C.</p>
            <p><Tag className='w-4 h-4 inline-block' /><span className='font-bold'>Bank Offer10%</span> off on BOBCARD Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C.</p>
            <p><Tag className='w-4 h-4 inline-block' /><span className='font-bold'>Combo Offer</span> Buy 2 or more items save ₹20See all productsT&C.</p>
          </div>
        </div>

      </div>

    </div>
  )
}
