import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCart = () => {

    return (
        <>

            <div className="product-card ">
                <div className="card card-one">
                    <span id='image-section'>
                        <img style={{ marginLeft: "50px" }} src="https://assets.ajio.com/medias/sys_master/root/20230103/CiP3/63b3fa75f997ddfdbd0d81fa/-473Wx593H-465531467-blue-MODEL.jpg"
                            alt="" />
                        <button className="btn btn-md  wishlist-btn"><FavoriteBorderIcon id='wishlist' /></button>
                    </span>
                    <h5>ROLLIO</h5>
                    <h4>PRICE:5000</h4>
                    <button className="btn btn-lg w-100 btn-dark  rounded-5" style={{ fontSize: "16px" }}>ADD TO CART</button>

                </div>

            </div>

        </>
    )
}

export default ProductCart