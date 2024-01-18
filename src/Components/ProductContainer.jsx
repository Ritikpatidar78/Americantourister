import React from 'react'
import ProductCart from './ProductCart'

const ProductContainer = () => {
    return (
        <div className="menu">
            <h3 id='shop-product'>
                <span style={{ borderBottom: "6px solid red", }}>  Shop</span> products
            </h3>
            <span className='button-holder'>
                <button class="button type1" id='most-popular'>
                    <span class="btn-txt" >Most Popular</span>
                </button>
                <button class="button type1">
                    <span class="btn-txt">What's New</span>
                </button>
                <button class="button type1">
                    <span class="btn-txt">Best Seller</span>
                </button>
            </span>

            <div className='scrollmenu'>
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
            </div>
        </div>

    )
}

export default ProductContainer