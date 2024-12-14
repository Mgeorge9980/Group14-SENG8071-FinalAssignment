const express = require('express');
const router = express.Router();
const CustomerRepository = require('../repositories/customerRepository');

// Create a Customer
router.post('/', async (req, res) => {
  try {
    const customer = await CustomerRepository.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Customers
router.get('/', async (req, res) => {
  try {
    const customers = await CustomerRepository.getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Customer by ID
router.get('/:id', async (req, res) => {
  try {
    const customer = await CustomerRepository.getCustomerById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Customer
router.put('/:id', async (req, res) => {
  try {
    await CustomerRepository.updateCustomer(req.params.id, req.body);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Customer
router.delete('/:id', async (req, res) => {
  try {
    await CustomerRepository.deleteCustomer(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
