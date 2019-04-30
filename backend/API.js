const axios = require('axios');

const baseURL = 'https://api.spacexdata.com/v3/';

const fetch = axios.create({ baseURL });

module.exports = fetch;
