import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCoins } from '../../services';
import { Chart } from '../';
import millify from 'millify';

// ! icons
import { FiHash } from 'react-icons/fi';
import { BsCashCoin, BsCurrencyExchange } from 'react-icons/bs';
import {
    AiOutlineThunderbolt,
    AiOutlineShoppingCart,
    AiOutlineLineChart,
    AiOutlineCheck,
} from 'react-icons/ai';
import { TfiCup } from 'react-icons/tfi';
import { CiBitcoin } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

const CoinDetails = ({ coin, setCoin }) => {
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const { data: coinData } = await getCoins(`coin/${id}`);
            setCoin(coinData.data.coin);
        };
        fetchData();
    }, []);
    return (
        <>
            {Object.keys(coin).length > 0 && (
                <div className='flex flex-col p-10'>
                    <div className='flex py-4 items-center space-x-2'>
                        <img src={coin.iconUrl} className='w-16' />
                        <p className='text-gray-500'>{coin.description}</p>
                    </div>
                    <p className='text-secondaryColor text-2xl font-semibold '>
                        {coin.name} Value Statistics
                    </p>
                    <p className='text-primaryColor text-xl my-5'>
                        An overview showing the stats of {coin.name}
                    </p>
                    <div className='flex flex-col lg:flex-row items-center justify-between'>
                        <div className='w-full lg:w-1/3'>
                            <div className='flex justify-between py-4 border-b '>
                                <div className='flex items-center space-x-4 text-gray-500'>
                                    <p>
                                        <FiHash />
                                    </p>
                                    <p>Rank</p>
                                </div>
                                <p className='text-black font-bold'>
                                    {coin.rank}
                                </p>
                            </div>
                            <div className='flex justify-between py-4 border-b'>
                                <div className='flex items-center space-x-4 text-gray-500'>
                                    <p>
                                        <BsCashCoin />
                                    </p>
                                    <p className='text-gray-500'>
                                        Price to USD
                                    </p>
                                </div>
                                <p className='text-black font-bold'>
                                    $ {millify(coin.price)}
                                </p>
                            </div>
                            <div className='flex justify-between py-4 border-b'>
                                <div className='flex items-center space-x-4 text-gray-500'>
                                    <p>
                                        <AiOutlineThunderbolt />
                                    </p>
                                    <p className='text-gray-500'>24h Volume</p>
                                </div>
                                <p className='text-black font-bold'>
                                    $ {millify(coin['24hVolume'])}
                                </p>
                            </div>
                            <div className='flex justify-between py-4 border-b'>
                                <div className='flex items-center space-x-4 text-gray-500'>
                                    <p>
                                        <TfiCup />
                                    </p>
                                    <p className='text-gray-500'>
                                        All-time-high
                                    </p>
                                </div>
                                <p className='text-black font-bold'>
                                    $ {millify(coin.allTimeHigh.price)}
                                </p>
                            </div>
                            <div className='flex justify-between py-4 border-b'>
                                <div className='flex items-center space-x-4 text-gray-500'>
                                    <p>
                                        <AiOutlineShoppingCart />
                                    </p>
                                    <p className='text-gray-500'>market cap</p>
                                </div>
                                <p className='text-black font-bold'>
                                    $ {millify(coin.marketCap)}
                                </p>
                            </div>
                            <div className='flex justify-between py-4 border-b'>
                                <div className='flex items-center space-x-4 text-gray-500'>
                                    <p>
                                        <BsCurrencyExchange />
                                    </p>
                                    <p className='text-gray-500'>
                                        Number Of Exchanges
                                    </p>
                                </div>
                                <p className='text-black font-bold'>
                                    {coin.numberOfExchanges}
                                </p>
                            </div>
                            <div className='flex justify-between py-4 border-b'>
                                <div className='flex items-center space-x-4 text-gray-500'>
                                    <p>
                                        <AiOutlineLineChart />
                                    </p>
                                    <p className='text-gray-500'>
                                        Number Of Markets
                                    </p>
                                </div>
                                <p className='text-black font-bold'>
                                    {coin.numberOfMarkets}
                                </p>
                            </div>

                            <div className='flex justify-between py-4 border-b'>
                                <div className='flex items-center space-x-4 text-gray-500'>
                                    <p>
                                        <CiBitcoin />
                                    </p>

                                    <p className='text-gray-500'>
                                        Aprroved Supply
                                    </p>
                                </div>

                                <p className='text-black font-bold'>
                                    {coin.supply.confirmed ? (
                                        <AiOutlineCheck />
                                    ) : (
                                        <RxCross1 />
                                    )}
                                </p>
                            </div>
                            <div className='flex justify-between py-4 border-b'>
                                <div className='flex items-center space-x-4 text-gray-500'>
                                    <p>
                                        <CiBitcoin />
                                    </p>

                                    <p className='text-gray-500'>
                                        Total Supply
                                    </p>
                                </div>{' '}
                                <p className='text-black font-bold'>
                                    $ {millify(coin.supply.total)}
                                </p>
                            </div>
                            <div className='flex justify-between py-4'>
                                <div className='flex items-center space-x-4 text-gray-500'>
                                    <p>
                                        <CiBitcoin />
                                    </p>

                                    <p className='text-gray-500'>
                                        Circulating Supply
                                    </p>
                                </div>
                                <p className='text-black font-bold'>
                                    $ {millify(coin.supply.circulating)}
                                </p>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <Chart
                                ticks={true}
                                sparkline={coin.sparkline}
                                change={coin.change}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CoinDetails;
