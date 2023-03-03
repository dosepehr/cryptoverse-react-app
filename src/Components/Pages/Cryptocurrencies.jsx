import { useState, useEffect } from 'react';
import { TopCoins } from '../';
const Cryptocurrencies = ({ coins }) => {
    const [query, setQuery] = useState('');
    const [filteredCoins, setFilteredCoins] = useState([]);
    useEffect(() => {
        const filteredData =
            Object.keys(coins).length > 0 &&
            coins.coins.filter((coin) =>
                coin.name.toLowerCase().includes(query.toLowerCase())
            );
        filteredData ? setFilteredCoins(filteredData) : null;
    }, [query, coins]);
    return (
        <div className='mx-auto'>
            <div className='w-full flex items-center' >
                <input
                    placeholder='Search Cryptocurrency'
                    className='w-[300px] ms:w-[500px] mt-10 px-5 py-2 border border-secondaryColor outline-none mx-auto '
                    type='text'
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            {Object.keys(coins).length > 0 && (
                <TopCoins coins={filteredCoins} count={100} />
            )}
        </div>
    );
};

export default Cryptocurrencies;
