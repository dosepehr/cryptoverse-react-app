import React from 'react';
import { Link } from 'react-router-dom';
import { BsCodeSlash } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi';
const Footer = () => {
    return (
        <div className='w-full bg-primaryColor h-[15vh] text-center text-white py-3'>
            <p>Cryptoverse</p>
            <p className='my-3'>All rights reserverd</p>
            <div className='text-se flex items-center justify-center'>
                with
                <BsCodeSlash style={{ color: '#0071bd', margin: '0 10px' }} />
                and
                <BiHeart style={{ color: 'red', margin: '0 10px' }} /> by
                <a
                    href='https://github.com/dosepehr'
                    className='ml-[10px] text-secondaryColor hover:text-white duration-300 '
                >
                    dosepehr :))
                </a>
            </div>
        </div>
    );
};

export default Footer;
