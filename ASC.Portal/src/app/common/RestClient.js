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
        return doGet('/numbers', params);
    }

    const get8421 = (a,b) => {
        return doGet('/toAdd', {a: a, b: b});
    }

    const getExcess = (a,b) => {
        return doGet('/toExcess', {a: a, b: b});
    }

    const getResult=()=>{
        return doGet('/result')
    }

    return {
        getNumbers: getNumbers,
        get8421: get8421,
        getExcess: getExcess,
    };
})();

export default RestClient;
