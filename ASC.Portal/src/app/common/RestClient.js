"use strict"

import axios from 'axios';

const RestClient = (() => {
    /* module constants */
    const apiPath = 'http://localhost:4000/api';

    /* helper methods */
    const doGet = (url, params) => {
        return axios.get(apiPath + url, {
            params: params
        })
    };

    const doPost = (url, data) => {
        return axios.post(apiPath + url, data);
    };

    
    const getNumbers = (params) => {
        return doGet('/numbers',params);
    }


    return{
        getNumbers: getNumbers,
    };
})();

export default RestClient;
