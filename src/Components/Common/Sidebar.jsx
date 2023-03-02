import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { GrBitcoin } from 'react-icons/gr';
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
                    <div className='hover:text-primaryColor transition-all duration-300 flex items-center text-white space-x-2'>
                        <span>
                            <AiOutlineHome />
                        </span>
                        <span>Home</span>
                    </div>
                </NavLink>
                <NavLink
                    to='Cryptocurrencies'
                    className={({ isActive }) =>
                        isActive ? 'activeLink' : 'notActiveLink'
                    }
                >
                    <div className='hover:text-primaryColor transition-all duration-300 flex items-center text-white space-x-2'>
                        <span>
                            <GrBitcoin />
                        </span>
                        <span>cryptocurrencies</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
