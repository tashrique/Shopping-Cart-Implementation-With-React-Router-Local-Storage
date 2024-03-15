import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { HandRaisedIcon } from '@heroicons/react/24/solid'


const FriendDetails = () => {

    const friend = useLoaderData();

    return (
        <div className='flex justify-center items-center my-20'>
            <div className='border p-10 rounded-2xl flex flex-col gap-1'>
                <h1 className='font-black text-[30px] mb-5'>Hambaaa <span className='text-yellow-500'>{friend.name}</span></h1>
                <p className='text-gray-400 font-medium'>Username: {friend.username}</p>
                <p className='text-gray-400 font-medium'>Phone: {friend.phone}</p>
                <p className='text-gray-400 font-medium'>Company: {friend.company.name}</p>
                <p className='text-gray-400 font-medium'>Website {friend.website}</p>

                <button className='btn mt-4 bg-white text-gray-900 flex justify-center'>Add Friend
                    <HandRaisedIcon className='h-5 w-5 ml-2' />
                </button>


            </div>

        </div>
    );
};

export default FriendDetails;