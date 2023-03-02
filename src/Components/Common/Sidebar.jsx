import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='h-[85vh] bg-primaryColor w-2/12'>
            <div className='flex items-center justify-center space-x-3 p-8 '>
                <img
                    src='/assets/cryptocurrency.png'
                    alt='logo'
                    className='h-16'
                />
                <p className='text-2xl font-semibold text-secondaryColor '>
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
                    <span className='hover:text-primaryColor transition-all duration-300'>
                        Home
                    </span>
                </NavLink>
                <NavLink
                    to='Cryptocurrencies'
                    className={({ isActive }) =>
                        isActive ? 'activeLink' : 'notActiveLink'
                    }
                >
                    <span className='hover:text-primaryColor transition-all duration-300'>
                        Cryptocurrencies
                    </span>
                </NavLink>
                <NavLink
                    to='News'
                    className={({ isActive }) =>
                        isActive ? 'activeLink' : 'notActiveLink'
                    }
                >
                    <span className='hover:text-primaryColor transition-all duration-300'>
                        News
                    </span>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
