import { useState, useEffect } from 'react';
import {
    Sidebar,
    Home,
    News,
    Cryptocurrencies,
    Footer,
    MainLayout,
} from './Components';
import { Routes, Route } from 'react-router-dom';
import { getCoins } from './services';
const App = () => {
    const [coins, setCoins] = useState([]);

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
                    <Route path='/Home' element={<Home coins={coins} />} />
                    <Route
                        path='/Cryptocurrencies'
                        element={<Cryptocurrencies coins={coins} />}
                    />
                </Routes>
            </MainLayout>
            <Footer />
        </>
    );
};

export default App;
