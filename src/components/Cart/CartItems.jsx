import React from 'react';

const CartItems = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <div>
                {
                    cart.map(post => <div className='flex gap-4'>
                        <p className='text-gray-400 capitalize my-5 '>{post.title} x {post.quantity}</p>
                        <button className="btn h-2/3 my-auto right-0" onClick={() => handleRemoveFromCart(post)}>x</button>
                    </div>)
                }
            </div>

        </div>
    );
};

export default CartItems;