const { Repair } = require('../models');

const RepairRepository = {
  createRepair: (data) => Repair.create(data),
  getAllRepairs: () => Repair.findAll(),
  getRepairById: (id) => Repair.findByPk(id),
  updateRepair: (id, data) => Repair.update(data, { where: { id } }),
  deleteRepair: (id) => Repair.destroy({ where: { id } }),
};

module.exports = RepairRepository;
