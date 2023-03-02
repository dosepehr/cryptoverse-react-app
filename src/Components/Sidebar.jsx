import React from 'react';

const Sidebar = () => {
    return (
        <div className='h-screen bg-blue-900 w-60 p-4'>
            <div className='flex items-center justify-center space-x-3'>
                <img
                    src='/public/assets/cryptocurrency.png'
                    alt='logo'
                    className='h-16'
                />
                <p className='text-2xl font-semibold text-blue-600 '>Cryptoverse</p>
            </div>
        </div>
    );
};

export default Sidebar;
