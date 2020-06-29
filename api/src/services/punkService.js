require('dotenv').config();

const axios = require('axios');

const api = axios.create({    
    baseURL: process.env.API_KEY
});

const get = async (page, perPage) => {
    const url = `/beers?page=${page}&per_page=${perPage}`;

    return api.get(url)
                .then((response) => {
                    return response.data.map(item => {
                        return {
                            id: item.id,
                            name: item.name,
                            description: item.description
                        }
                    });
                })
                .catch( error => {
                    return error;
                });} 

module.exports = {
    get
}