const express = require('express');
const router = express.Router();
const TruckRepository = require('../repositories/truckRepository');

// Create a Truck
router.post('/', async (req, res) => {
  try {
    const truck = await TruckRepository.createTruck(req.body);
    res.status(201).json(truck);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Trucks
router.get('/', async (req, res) => {
  try {
    const trucks = await TruckRepository.getAllTrucks();
    res.status(200).json(trucks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Truck by ID
router.get('/:id', async (req, res) => {
  try {
    const truck = await TruckRepository.getTruckById(req.params.id);
    if (!truck) {
      return res.status(404).json({ message: 'Truck not found' });
    }
    res.status(200).json(truck);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Truck
router.put('/:id', async (req, res) => {
  try {
    await TruckRepository.updateTruck(req.params.id, req.body);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Truck
router.delete('/:id', async (req, res) => {
  try {
    await TruckRepository.deleteTruck(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
