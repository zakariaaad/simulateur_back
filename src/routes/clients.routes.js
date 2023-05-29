const express = require('express')
const router = express.Router()
const clientsController = require('../controllers/clients.controller');

// Retrieve all clients
router.get('/', clientsController.findAll);

// Create a new client
router.post('/addclt', clientsController.create);

// Retrieve a single client with id
router.get('/:id', clientsController.findById);

// Update a client with id
router.put('/:id', clientsController.update);

// Delete a client with id
router.delete('/:id', clientsController.delete);

module.exports = router