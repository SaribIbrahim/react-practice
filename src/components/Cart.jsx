import React from 'react'
import { useSelector } from 'react-redux'
import "./Cart.css"

function Cart() {

    const { cart } = useSelector((state) => state.rootReducer)
    return (
        <>
            <h2 style={{ marginLeft: "30px" }}>Shopping Cart</h2>
            {
                cart.length === 0 ? (<p>Your cart is empty</p>) : (
                    <div className="cart-wrapper">
                        <div className="container">
                            <div className="row">
                                {cart.cart.map((item) => (
                                    <div className="col-3">
                                        <div key={item.id} className="cart-item">
                                            <h3>{item.title}</h3>
                                            <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
                                            <p>Price: ${item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Cart