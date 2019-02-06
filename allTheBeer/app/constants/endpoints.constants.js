const baseEndpoint = 'https://api.punkapi.com/v2';

export default {
    getAllBeers:   `${baseEndpoint}/beers`,
    getSingleBeer: `${baseEndpoint}/beers/:beerId`,
    getRandomBeer: `${baseEndpoint}/beers/random`
};
