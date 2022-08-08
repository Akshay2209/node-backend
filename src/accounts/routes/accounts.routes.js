const express = require('express')
const router = express.Router()
const accountController =   require('../controllers/accounts.controller');
// Retrieve all employees
router.post('/create',accountController.createAccounts);
// Create a new employee
router.put('/accounts/update', accountController.createAccounts);
// Retrieve a single employee with id
router.get('accounts/:id', accountController.createAccounts);
router.get('accounts/all', accountController.createAccounts);
// Update a employee with id
router.put('/:id', accountController.createAccounts);
// Delete a employee with id
router.post('accounts/delete/:id', accountController.createAccounts);
module.exports = router