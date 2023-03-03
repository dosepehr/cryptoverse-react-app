import { Crypto } from './';
import { Link } from 'react-router-dom';
const TopCoins = ({ coins, count }) => {
    return (
        <div className='flex mt-10'>
            <div className='flex flex-col w-full'>
                <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                        <div className='overflow-hidden'>
                            <table className='min-w-full'>
                                <thead className='bg-gray-100 border-b'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            #
                                        </th>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            Name
                                        </th>

                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            Market Cap
                                        </th>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            1h %
                                        </th>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            Volume(24h)
                                        </th>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            Last Day
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(coins).length > 0 &&
                                        coins.coins.map(
                                            (item, index) =>
                                                index < count && (
                                                    <Crypto
                                                        {...item}
                                                        key={index}
                                                        Volume={
                                                            item['24hVolume']
                                                        }
                                                    />
                                                )
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCoins;
