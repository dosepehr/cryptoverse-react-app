import { Sidebar, Home, News, Cryptocurrencies } from './Components';
import { Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <>
            <Sidebar />
            <Routes>
                <Route path='/Home' element={<Home />} />
                <Route path='/News' element={<News />} />
                <Route
                    path='/Cryptocurrencies'
                    element={<Cryptocurrencies />}
                />
            </Routes>
        </>
    );
};

export default App;
