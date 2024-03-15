import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const PostDetails = () => {

    const post = useLoaderData();

    return (
        <div className='flex justify-center items-center my-20'>
            <div className='border p-10 rounded-2xl flex flex-col gap-1'>
                <h1 className='font-black text-[30px] mb-5'>Hambaaa <span className='text-yellow-500'>{post.title}</span></h1>
                <p className='text-gray-400 font-medium'>{post.body} {post.body} {post.body} {post.body} <br /> <br /> {post.body} {post.body} {post.body} {post.body} </p>
                <p className='text-gray-400 font-medium'>UserID: {post.userId}</p>


                <button className='btn mt-4 bg-white text-gray-900 flex justify-center'>Add to Cart
                    <ShoppingCartIcon className='h-5 w-5 ml-2' />
                </button>


            </div>

        </div>
    );
};

export default PostDetails;