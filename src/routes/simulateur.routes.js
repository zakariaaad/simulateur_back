const express = require('express')
const router = express.Router()
const simulateurController = require('../controllers/simulateur.controller');

// Retrieve all simulation
router.get('/', simulateurController.findAll);

// Create a new simulation
router.post('/', simulateurController.create);

// Retrieve a single simulation with id
router.get('/:id', simulateurController.findById);

// Update a simulation with id
router.put('/:id', simulateurController.update);

// Delete a simulation with id
router.delete('/:id', simulateurController.delete);

module.exports = router