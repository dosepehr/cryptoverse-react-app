import React from 'react';
import {TopCoins } from '../';
const Cryptocurrencies = ({ coins }) => {
    return (
        <div>
            <TopCoins coins={coins} count={500} />
        </div>
    );
};

export default Cryptocurrencies;
