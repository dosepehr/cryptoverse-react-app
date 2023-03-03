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
}) => {
    return (
        <>
            <Link to={`/coins/${uuid}`}>
                <div className='p-4 shadow-md'>
                    <div className='flex justify-between border-b-2 pb-2'>
                        <p>
                            {rank}.{name}{' '}
                            <span style={{ color: `${color}` }}>{symbol}</span>
                        </p>
                        <img src={iconUrl} className='w-8' />
                    </div>
                    <div className='space-y-2 py-4 '>
                        <p>price: ${millify(price)}</p>
                        <p>Market Cap: {millify(marketCap)}</p>
                        <p>
                            Daily Change:{' '}
                            <span
                                style={{
                                    color: `${change > 0 ? 'green' : 'red'}`,
                                }}
                            >
                                {change} %
                            </span>
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Crypto;

{
}
