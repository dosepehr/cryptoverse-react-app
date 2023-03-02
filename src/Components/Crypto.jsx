import React from 'react';

const Crypto = ({
    name,
    iconUrl,
    symbol,
    color,
    marketCap,
    price,
    rank,
    change,
}) => {
    return (
        <tr className=''>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6'>
                {rank}
            </td>
            <td className='whitespace-nowrap px-3 py-4 flex items-center space-x-2'>
                <img src={iconUrl} alt='' className='w-7' />
                <p>{name}</p>
                <p style={{ color: `${color}` }}>{symbol}</p>
            </td>
            <td className='whitespace-nowrap px-3 py-4 font-semibold'>
                ${price}
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm'>
                <span className='flex justify-center'>$ {marketCap}</span>
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm'>
                <span
                    className='flex justify-center'
                    style={{
                        color: `${change > 0 ? 'green' : 'red'}`,
                    }}
                >
                    {change}
                </span>
            </td>
            <td className='py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                <div className='inline-block text-left'>
                    {name}'s chart showing here
                </div>
            </td>
        </tr>
    );
};

export default Crypto;

{
}
