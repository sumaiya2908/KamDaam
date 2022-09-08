import React from 'react'
import { TestImage, StarIcon } from '../../public/images/index';

function Product() {
  return (
    <div className='product-container border-2 rounded bg-white pb-4'>
      <img className='product-image' src={TestImage} />
      <div className='product-details px-4'>
        <div className='product-name pt-3'>
          Test Name
        </div>
        <div className='product-desc text-sm text-slate-500'>
        Something somethig something
        </div>
        <div className='flex justify-between mb-4 mt-2'>
        <span className='product-rate'>
        ₹ 565
        </span>
        <span className='product-rating'>
        3<StarIcon/>
        </span>
        </div>
        
      </div>
      <div className='add-to-cart w-full px-4 mt-2'>
        <button className='bg-secondary text-sm w-full hover:bg-blue-600 text-white py-1 px-2 rounded' type="submit">Add to cart</button>
      </div>
    </div>
  )
}

export default Product