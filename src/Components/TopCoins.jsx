import { Crypto } from './';
import { Link } from 'react-router-dom';
const TopCoins = ({ coins, count }) => {
    return (
        <div className='flex mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6'>
                {Object.keys(coins).length > 0 &&
                    coins.coins.map(
                        (item, index) =>
                            index < count && <Crypto {...item} key={index} />
                    )}
                <Link className='text-right ' to='/Cryptocurrencies'>
                    <p className='text-secondaryColor mt-4'>show more</p>
                </Link>
            </div>
        </div>
    );
};

export default TopCoins;
