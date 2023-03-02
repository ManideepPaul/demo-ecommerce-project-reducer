import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => {
                const { id, imageUrl, name, price, quantity } = cartItem
                return (
                    // <div key={id}>
                    //     <h2>{name}</h2>
                    //     {/* <img src={imageUrl} alt={`${name}`} /> */}
                    //     <span>{quantity}</span>
                    //     <br />
                    //     <span onClick={() => removeItemFromCart(cartItem)}> decrement </span>
                    //     <span onClick={() => addItemToCart(cartItem)}>increment</span>

                    //     {/* <span>${quantity * price}</span> */}
                    //     {/* <button onClick={() => removeItemFromCart(cartItem)}> X </button> */}
                    // </div>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            )}
            <span className="total">Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout;