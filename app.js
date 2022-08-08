const express = require('express');
const bodyParser = require('body-parser');
const env = require('./envrionments/environment');

const app = express();

const port = env.envrionment.port || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const accountsRoutes = require('./src/accounts/routes/accounts.routes')

app.use('/api/v1/accounts', accountsRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});