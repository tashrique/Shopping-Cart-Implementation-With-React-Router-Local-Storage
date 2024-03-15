import React from 'react';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const SinglePost = (props) => {
    const { handleAddToCart, post } = props;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/post/${post.id}`)
    }


    return (
        <div className='rounded-lg bg-white p-6 flex flex-col gap-2 justify-between'>
            <img src='https://picsum.photos/200' className='w-full rounded-lg' />
            <h2 className='text-gray-900 text-xl capitalize mt-2'>{post.title}</h2>
            <div className='flex gap-1 items-center'>
                <p className='text-gray-700 font-medium'>{post.body}</p>
            </div>

            <div className='flex flex-col gap-4'>
                <button className="flex btn items-center justify-center gap-2 py-4" onClick={handleNavigate}>See Details</button>
                <button className="flex btn items-center justify-center gap-2 py-4 bg-yellow-500" onClick={() => handleAddToCart(post)}>
                    <ShoppingCartIcon className="h-5 w-5" />
                    <span>Add to Cart</span>
                </button>
            </div>
            bu





        </div>
    );
};

export default SinglePost;