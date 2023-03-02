import { useEffect, useState } from 'react';
import { getCoins } from '../../services';

const Home = ({ coins, setCoins }) => {
    useEffect(() => {
        const fetchData = async () => {
            const { data:coinsData } = await getCoins('coins');
            setCoins(coinsData.data);
        };
        fetchData();
    }, []);
    console.log(coins)
    return <div>Home</div>;
};

export default Home;
