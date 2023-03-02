import {
    Sidebar,
    Home,
    News,
    Cryptocurrencies,
    Footer,
    MainLayout,
} from './Components';
import { Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <>
            <MainLayout>
                <Sidebar />
                <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/News' element={<News />} />
                    <Route
                        path='/Cryptocurrencies'
                        element={<Cryptocurrencies />}
                    />
                </Routes>
            </MainLayout>
            <Footer />
        </>
    );
};

export default App;
