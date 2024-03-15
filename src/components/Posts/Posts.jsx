import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';
import Cart from '../Cart/Cart';
import { useState } from 'react';
import { addToDB, getStoredCart, saveCartToDB, removeFromLocalStorage } from '../../utilities/fakeDb';
import { useEffect } from 'react';


const Posts = () => {

    const posts = useLoaderData();


    const [cart, setCart] = useState([]);


    const handleAddToCart = (post) => {
        const newCart = [...cart, post];
        setCart(newCart);
        addToDB(post.id);
    }

    const handleRemoveFromCart = post => {
        const newCart = cart.filter(item => item.id !== post.id);
        setCart(newCart);
        removeFromLocalStorage(post.id);
    }

    useEffect(() => {
        const storedCart = getStoredCart();

        const savedCart = [];
        for (const id of storedCart) {
            const post = posts.find(post => post.id === id);

            if (post) {
                savedCart.push(post);
            }
        }
        console.log(savedCart);
        setCart(savedCart);


    }, [posts])

    return (
        <>
            <div className='w-full flex'>
                <div className='flex justify-center items-center flex-col my-20 font-bold w-4/5'>
                    <h1 className='text-white mb-20'>Look at All the Cool {posts.length} Posts, <span className='text-yellow-500'>Dude!</span></h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 w-full'>
                        {
                            posts.map(post => <SinglePost key={post.id} post={post} handleAddToCart={handleAddToCart}></SinglePost>)
                        }
                    </div>
                </div>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>


            </div>

        </>
    );
};

export default Posts;