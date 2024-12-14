const express = require('express');
const router = express.Router();
const EmployeeRepository = require('../repositories/employeeRepository');

// Create an Employee
router.post('/', async (req, res) => {
  try {
    const employee = await EmployeeRepository.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Employees
router.get('/', async (req, res) => {
  try {
    const employees = await EmployeeRepository.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Employee by ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await EmployeeRepository.getEmployeeById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Employee
router.put('/:id', async (req, res) => {
  try {
    await EmployeeRepository.updateEmployee(req.params.id, req.body);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Employee
router.delete('/:id', async (req, res) => {
  try {
    await EmployeeRepository.deleteEmployee(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
