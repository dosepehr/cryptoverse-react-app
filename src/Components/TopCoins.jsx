import { Crypto } from './';
import { Link } from 'react-router-dom';
const TopCoins = ({ coins,count }) => {
    return (
        <div>
            <div>
                <div className='inline-block py-2 align-middle'>
                    <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                        <table className='min-w-full divide-y divide-gray-300'>
                            <thead className='bg-gray-50'>
                                <tr>
                                    <th
                                        scope='col'
                                        className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                                    >
                                        #
                                    </th>
                                    <th
                                        scope='col'
                                        className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'
                                    >
                                        name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                    >
                                        price
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-3 py-3.5 text-center text-sm font-semibold text-gray-900'
                                    >
                                        marketCap
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-3 py-3.5 text-center text-sm font-semibold text-gray-900'
                                    >
                                        change
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-3 py-3.5 text-center text-sm font-semibold text-gray-900'
                                    >
                                        chart
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200 bg-white'>
                                {Object.keys(coins).length > 0 &&
                                    coins.coins.map(
                                        (item, index) =>
                                            index < count && (
                                                <Crypto {...item} key={index} />
                                            )
                                    )}
                            </tbody>
                        </table>
                    </div>
                    <Link className='text-right ' to='/Cryptocurrencies'>
                        <p className='text-secondaryColor mt-4'>show more</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopCoins;
