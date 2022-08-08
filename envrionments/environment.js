const dotenv = require('dotenv');
const fs  = require('fs')
const path = require('path')

const nodeEnv = process.env['NODE' + '_ENV'];


let envConfig = dotenv.parse(fs.readFileSync(path.join(process.cwd(), `.local.env`)));

envConfig = Object.assign(Object.assign({},envConfig), process.env);

function env(path, noParsing = false){

    const value = envConfig[path];
    try{
        return noParsing ? value : JSON.parse(value);
    }catch(e){
        return value;
    }
}

const isLocal = env('envrionemnt.isLocal');
exports.envrionment = {
    nodeEnv,
    dbConfig : {
        databaseName: env('DATABASE_NAME'),
        databaseUser: env('DATABASE_USER'),
        databasePassword: env('DATABASE_PASSWORD'),
        databaseConnection: env('DATABASE_CONNECTION')
    },
    sellerApi :{
        sellerGetAccessToken: env('SELLER_API')
    },
    port: 6000

}