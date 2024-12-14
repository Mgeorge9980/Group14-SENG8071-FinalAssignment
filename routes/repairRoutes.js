const express = require('express');
const router = express.Router();
const RepairRepository = require('../repositories/repairRepository');

// Create a Repair
router.post('/', async (req, res) => {
  try {
    const repair = await RepairRepository.createRepair(req.body);
    res.status(201).json(repair);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Repairs
router.get('/', async (req, res) => {
  try {
    const repairs = await RepairRepository.getAllRepairs();
    res.status(200).json(repairs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Repair by ID
router.get('/:id', async (req, res) => {
  try {
    const repair = await RepairRepository.getRepairById(req.params.id);
    if (!repair) {
      return res.status(404).json({ message: 'Repair not found' });
    }
    res.status(200).json(repair);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Repair
router.put('/:id', async (req, res) => {
  try {
    await RepairRepository.updateRepair(req.params.id, req.body);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Repair
router.delete('/:id', async (req, res) => {
  try {
    await RepairRepository.deleteRepair(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
