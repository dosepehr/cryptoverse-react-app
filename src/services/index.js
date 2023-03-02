import axios from 'axios';
const BASE_URL = 'https://coinranking1.p.rapidapi.com';
const coinsOptions = {
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '500',
        offset: '0',
    },
    headers: {
        'X-RapidAPI-Key': '7f969a59bcmsh367313f461fbf4ap1fc7b0jsnca138dc750d0',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
};

export const getCoins = (url) => {
    return axios.get(`${BASE_URL}/${url}`, coinsOptions);
};
