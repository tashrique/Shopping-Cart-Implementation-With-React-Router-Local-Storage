import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between bg-gray-700 py-6 px-16'>
            <div>
                <img src="vite.svg" alt="" />
            </div>

            <div className="flex gap-10 text-white text-lg">

                <NavLink className={({ isActive }) => isActive ? 'text-yellow-500' : undefined} to="/posts">Posts</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-yellow-500' : undefined} to="/users">Friends</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-yellow-500' : undefined} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-yellow-500' : undefined} to="/contact">Contact</NavLink>

            </div>
        </div>
    );
};

export default Header;