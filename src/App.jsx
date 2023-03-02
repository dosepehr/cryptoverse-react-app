import { useState, useEffect } from 'react';
import {
    Sidebar,
    Home,
    Cryptocurrencies,
    Footer,
    MainLayout,
    CoinDetails,
} from './Components';
import { Routes, Route ,Navigate} from 'react-router-dom';
import { getCoins } from './services';
const App = () => {
    const [coins, setCoins] = useState([]);
    const [coin, setCoin] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data: coinsData } = await getCoins('coins');
            setCoins(coinsData.data);
        };
        fetchData();
    }, []);
    return (
        <>
            <MainLayout>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Navigate to='/Home' />} />
                    <Route path='/Home' element={<Home coins={coins} />} />
                    <Route
                        path='/Cryptocurrencies'
                        element={<Cryptocurrencies coins={coins} />}
                    />
                    <Route
                        path='/coins/:id'
                        element={<CoinDetails coin={coin} setCoin={setCoin} />}
                    />
                </Routes>
            </MainLayout>
            <Footer />
        </>
    );
};

export default App;
