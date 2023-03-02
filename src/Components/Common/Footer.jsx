import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='w-full bg-primaryColor h-[15vh] text-center text-white py-3'>
            <p>Cryptoverse</p>
            <p className='my-3' >All rights reserverd</p>
            <div className='flex justify-center space-x-4 text-secondaryColor'>
                <Link className='hover:text-white duration-300' >Home</Link>
                <Link className='hover:text-white duration-300' >News</Link>
            </div>
        </div>
    );
};

export default Footer;
