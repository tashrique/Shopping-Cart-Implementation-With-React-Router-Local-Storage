import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();

    return (
        <div className='flex justify-center items-center flex-col my-20 font-bold '>
            <h1 className='text-white mb-20'>So many Friends! {friends.length} Posts, <span className='text-yellow-500'>Looking like a Wow!</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 w-full'>
                {
                    friends.map(friend => <Friend key={friends.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;