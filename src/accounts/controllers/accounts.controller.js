const db = require('../../../config/db.config');
const _ = require('lodash');
const env = require('../../../envrionments/environment');
const axios = require('axios');

exports.createAccounts = async (req, res) => {

    if (_.isEmpty(req.body)) {
        return res.status(400).send("Bad request");
    }

    const name = req.body.name;
    const email = req.body.email;
    const auth = req.body.auth;
    const sync = req.body.order == true ? 1 : 0;
    const qty = req.body.qty == true ? 1 : 0;
    const date = new Date();

        
    const url = `${env.envrionment.sellerApi.sellerGetAccessToken}/v1/authorize?email=${email}&auth_token=${auth}`;

   const databaseResult = db.query(
        "INSERT INTO ap4l_ext_accounts (`title`, `email`, `auth_token`, `sync_orders`, `sync_quantity`, `is_active`, `created_at`, `updated_at`) VALUES (?,?,?,?,?,?,?,?)",
        [name, email, auth, sync, qty, 1, date, date]).then((result) => {
            try{
                db.close();
                const result = axios.get(url);
                console.log(result);
                return result.data;
            } catch(e){
        
                console.log(e);
            }

        });

      databaseResult.then((data)=> {
        db.query(
            "INSERT INTO ap4l_ext_account_tokens (`id`, `account_id`, `access_token`, `created_at`, `expired_at`, ) VALUES (?,?,?,?,?,)",
            [1, 1, data.access_token, new Date(), data.expired_at]);

      })  

    



    
};