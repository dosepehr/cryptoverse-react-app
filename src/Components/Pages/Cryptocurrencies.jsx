import React from 'react';
import { TopCoins } from '../';
const Cryptocurrencies = ({ coins }) => {
    return (
        <div className='mx-auto'>
            <TopCoins coins={coins} count={100} />
        </div>
    );
};

export default Cryptocurrencies;
