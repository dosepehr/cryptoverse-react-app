import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-primaryColor p-5 flex flex-col space-y-5 md:space-y-0 md:flex-row items-center justify-between'>
            <div className=' flex items-center space-x-10'>
                <img src='/public/assets/cryptocurrency.png' className='w-14' />
                <p className='text-secondaryColor font-bold text-2xl'>
                    cryptoverse
                </p>
            </div>
            <div className='flex space-x-10'>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'text-secondaryColor hover:text-white duration-300'
                            : 'text-white hover:text-secondaryColor duration-300'
                    }
                    to='/Home'
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'text-secondaryColor hover:text-white duration-300'
                            : 'text-white hover:text-secondaryColor duration-300'
                    }
                    to='/cryptocurrencies'
                >
                    cryptocurrencies
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
