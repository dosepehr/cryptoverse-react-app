import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='w-full bg-blue-900 text-center text-white py-3'>
            <p>Cryptoverse</p>
            <p className='my-3' >All rights reserverd</p>
            <div className='flex justify-center space-x-4 text-blue-600'>
                <Link className='hover:text-white duration-300' >Home</Link>
                <Link className='hover:text-white duration-300' >News</Link>
            </div>
        </div>
    );
};

export default Footer;
