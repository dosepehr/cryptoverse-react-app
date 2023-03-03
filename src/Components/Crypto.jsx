import React from 'react';
import { Chart } from './';
import { Link } from 'react-router-dom';
import millify from 'millify';
const Crypto = ({
    name,
    iconUrl,
    symbol,
    color,
    marketCap,
    price,
    rank,
    change,
    sparkline,
    uuid,
    Volume,
}) => {
    return (
        <>
            <tr className='border-b'>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    <p className='text-gray-500'>{rank}</p>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                    <Link to={`/coins/${uuid}`}>
                        <div className='flex items-center space-x-2'>
                            <img src={iconUrl} alt='' className='w-6' />
                            <p className='font-semibold text-primaryColor'>
                                {name}
                            </p>
                            <p
                                style={{
                                    color: `${color}`,
                                }}
                            >
                                {symbol}
                            </p>
                        </div>
                    </Link>
                </td>
                <td className='text-primaryColor font-semibold px-6 py-4 whitespace-nowrap'>
                    ${millify(price)}
                </td>
                <td className='text-gray-900 font-semibold px-6 py-4 whitespace-nowrap'>
                    ${millify(marketCap)}
                </td>
                <td className='text-gray-900 font-semibold px-6 py-4 whitespace-nowrap'>
                    <p
                        style={{
                            color: `${change > 0 ? 'green' : 'red'}`,
                        }}
                    >
                        {change}%
                    </p>
                </td>
                <td className='text-gray-900 font-semibold px-6 py-4 whitespace-nowrap space-x-1'>
                    $ <span>{millify(Volume)}</span>
                </td>
                <td className='text-gray-900 px-6 py-4 whitespace-nowrap'>
                    <div className='w-40 h-40 flex justify-center items-center'>
                        <Chart
                            ticks={false}
                            sparkline={sparkline}
                            change={change}
                        />
                    </div>
                </td>
            </tr>
        </>
    );
};

export default Crypto;

{
}
