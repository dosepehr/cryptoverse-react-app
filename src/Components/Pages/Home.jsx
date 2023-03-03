import millify from 'millify';
import { TopCoins } from '../';
const Home = ({ coins }) => {
    return (
        <div className=' w-full p-8'>
            <p className='text-2xl w-full text-primaryColor mt-6'>
                Global Crypto Stats
            </p>
            {Object.keys(coins).length > 0 && (
                <>
                    <div className='grid grid-cols-2 grid-rows-3 grid-flow-col gap-4 mt-4'>
                        <div className='flex flex-col text-left'>
                            <p className='text-gray-500'>
                                Total Cryptocurrencies
                            </p>
                            <p className='text-primaryColor text-3xl mt-2'>
                                {millify(coins.stats.total)}
                            </p>
                        </div>

                        <div className='flex flex-col text-left'>
                            <p className='text-gray-500'>Total Exchanges</p>
                            <p className='text-primaryColor text-3xl mt-2'>
                                {millify(coins.stats.totalExchanges)}
                            </p>
                        </div>

                        <div className='flex flex-col text-left'>
                            <p className='text-gray-500'>Total Market Cap</p>
                            <p className='text-primaryColor text-3xl mt-2'>
                                {millify(coins.stats.totalMarketCap)}
                            </p>
                        </div>
                        <div className='flex flex-col text-left'>
                            <p className='text-gray-500'>Total 24h Volume</p>
                            <p className='text-primaryColor text-3xl mt-2'>
                                {millify(coins.stats.total24hVolume)}
                            </p>
                        </div>
                        <div className='flex flex-col text-left'>
                            <p className='text-gray-500'>Total Markets</p>
                            <p className='text-primaryColor text-3xl mt-2'>
                                {millify(coins.stats.totalMarkets)}
                            </p>
                        </div>
                    </div>
                    <TopCoins coins={coins} count={10} />
                </>
            )}
        </div>
    );
};

export default Home;
