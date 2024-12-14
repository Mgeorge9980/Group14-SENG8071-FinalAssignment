const { Customer } = require('../models');

const CustomerRepository = {
  createCustomer: (data) => Customer.create(data),
  getAllCustomers: () => Customer.findAll(),
  getCustomerById: (id) => Customer.findByPk(id),
  updateCustomer: (id, data) => Customer.update(data, { where: { id } }),
  deleteCustomer: (id) => Customer.destroy({ where: { id } }),
};

module.exports = CustomerRepository;
