import React from 'react';
import { FireIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { friend } = props;


    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/users/${friend.id}`)
    }


    return (
        <div className='rounded-lg bg-white p-6 flex flex-col gap-2 justify-between'>
            <h2 className='text-gray-900 text-2xl capitalize mt-2'>{friend.name}</h2>
            <div className='flex gap-1 flex-col'>
                <p className='text-gray-700 font-medium'>Username: {friend.username}</p>
                <p className='text-gray-700 font-medium'>Phone: {friend.phone}</p>
                <p className='text-gray-700 font-medium'>Company: {friend.company.name}</p>
            </div>

            <div className='flex flex-col gap-4'>


                <button className="flex btn items-center justify-center gap-2 py-4 bg-yellow-500" onClick={handleNavigate}>
                    <FireIcon className="h-5 w-5" />
                    <span>See Friend Details</span>
                </button>
            </div>

        </div >
    );
};

export default Friend;