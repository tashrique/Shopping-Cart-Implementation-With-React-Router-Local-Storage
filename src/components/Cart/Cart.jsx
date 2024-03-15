import React from 'react';
import CartItems from './CartItems';


const Cart = (props) => {


    const { cart, handleRemoveFromCart } = props;


    return (
        <div className="border border-gray-400 p-12 fixed right-10 mt-[215px] my-auto w-1/5 rounded-xl flex flex-col items-center">
            <h1 className="text-sm font-black">Added To Cart</h1>
            <h1>{cart.length}</h1>
            <CartItems cart={cart} handleRemoveFromCart={handleRemoveFromCart}></CartItems>

        </div>
    );
};

export default Cart;