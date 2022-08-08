const axios = require('axios');


exports.request = async function (requestType,url){


    switch(requestType){

        case 'GET':
            console.log("URL",url);
            const res = axios.get(`${url}`);
            return res.data;
    }
}
