import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='h-screen bg-blue-900 w-60 '>
            <div className='flex items-center justify-center space-x-3 p-4'>
                <img
                    src='/assets/cryptocurrency.png'
                    alt='logo'
                    className='h-16'
                />
                <p className='text-2xl font-semibold text-blue-600 '>
                    Cryptoverse
                </p>
            </div>
            <div className='flex flex-col mt-11 space-y-3'>
                <NavLink
                    to='Home'
                    className={({ isActive }) =>
                        isActive ? 'activeLink' : 'notActiveLink'
                    }
                >
                    <span className='hover:text-blue-900 transition-all duration-300'>
                        Home
                    </span>
                </NavLink>
                <NavLink
                    to='Cryptocurrencies'
                    className={({ isActive }) =>
                        isActive ? 'activeLink' : 'notActiveLink'
                    }
                >
                    <span className='hover:text-blue-900 transition-all duration-300'>
                        Cryptocurrencies
                    </span>
                </NavLink>
                <NavLink
                    to='News'
                    className={({ isActive }) =>
                        isActive ? 'activeLink' : 'notActiveLink'
                    }
                >
                    <span className='hover:text-blue-900 transition-all duration-300'>
                        News
                    </span>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
