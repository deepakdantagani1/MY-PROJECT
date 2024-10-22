const redis = require('redis');
const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

client.on('error', error => console.log(error));

async function add(key, value){
    try {
        if(key && value) client.set(key, value);
    } catch (error) {
        console.lof(error);
    }
}

async function get(key){
    try {
        console.log(`secound log`)
        // if(key) client.get(key, (error, value) =>{
        //     if(error) console.log(error);
        //     console.log(value);
        //     return value;
        // });
        return await getAsync(key);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {add, get};
