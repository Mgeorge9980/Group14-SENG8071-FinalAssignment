const { Employee } = require('../models');

const EmployeeRepository = {
  createEmployee: (data) => Employee.create(data),
  getAllEmployees: () => Employee.findAll(),
  getEmployeeById: (id) => Employee.findByPk(id),
  updateEmployee: (id, data) => Employee.update(data, { where: { id } }),
  deleteEmployee: (id) => Employee.destroy({ where: { id } }),
};

module.exports = EmployeeRepository;
